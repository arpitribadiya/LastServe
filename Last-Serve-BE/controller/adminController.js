//Created by Lav Patel
const { connectToDatabase } = require("../db/conn");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const path = require("path");
const { ObjectId } = require("mongodb");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });



exports.post_validateAdmin = async (request, response) => {
  try {
    const db = await connectToDatabase();
    let email=request.email;
    let password=request.password;
    if (email===""||password===""){
        return response.status(400).json({
            error:true,
            message: "Bad request",
          });
    }
    db.collection("admin")
      .findOne({ _id: request.body.email })
      .then((user) => {
        if (user) {
          bcrypt
            .compare(request.body.password, user.password)
            .then((isMatch) => {
              if (isMatch) {
                return response.status(200).json({
                  message: "Authentication successful",
                });
              } else {
                return response.status(401).json({
                  message: "Invalid User",
                });
              }
            });
        } else {
          return response.status(401).json({
            message: "Invalid user",
          });
        }
      });
  } catch (error) {
    console.error(error);
    return response.status(503).json({
      message: "Internal Server Error",
    });
  }
};

exports.get_pending_restaurantApplication = async (request, response) => {
    try {
        const email = request.headers.email;
        if (!email) {
            return response.status(401).json({ error: true, message: 'unauthorized' });
        }
        const db = await connectToDatabase();
        const adminCollection = db.collection('admin');
        const restaurantCollection = db.collection('restaurants');
        //check if the admin exists to allow further processing
        const admin = await adminCollection.findOne({ _id: email });
        if (!admin) {
          return response.status(401).send({ error:true , message: 'unauthorized' });
        }
        //get the orderdetails of all the orders whose status is 'packed'or 'pending'
        const restaurants = await restaurantCollection
        .find({ isapproved: 0 
        })
        .toArray();
      return response.send(restaurants);
    } catch (error) {
        console.error(error);
        return response.status(503).json({
            "error": true,
            "message": "Internal Server Error"
        });
    }
};
exports.post_change_restaurantApplication_status = async (request, response) => {
    try {
        const email = request.headers.email;
        if (!email) {
            return response.status(401).json({ error: true, message: 'unauthorized' });
        }
        const db = await connectToDatabase();
        const adminCollection = db.collection('admin');
        const restaurantCollection = db.collection('restaurants');
        //check if the admin exists to allow further processing
        const admin = await adminCollection.findOne({ _id: email });
        if (!admin) {
          return response.status(401).send({ error:true , message: 'unauthorized.' });
        }
        //get request params
        const restaurantId = request.params.restaurantId;
        const newStatus = request.body.status;
        if (!restaurantId||!newStatus) {
          return response.status(400).json({ error: true, message: 'bad request.' });
        }
        let newStatusinDb=0;
        if (newStatus==='approved'){
            newStatusinDb=1;
            const updateResult = restaurantCollection.updateOne({ _id: restaurantId }, { $set: { isapproved: newStatus } });
            if(!updateResult){
                return response.status(503).json({
                    "error": true,
                    "message": "Internal Server Error"
                });
    
            }
        }else{
          const deleteResult = restaurantCollection.deleteOne({ _id: restaurantId });
          if(!deleteResult){
              return response.status(503).json({
                  "error": true,
                  "message": "Internal Server Error"
              });
  
          }
        }

        // find the restaurant by restaurantId and update its status

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: "virajj60@gmail.com",
              pass: process.env.gmail_pass,
            },
          });
      
          let emailSubject=""
          let emailBody=""

        if(newStatusinDb===1){
            console.log('Restaurant '+restaurantId+' approved successfully');
            emailSubject="LastServe Restaurant Application Approved"
            emailBody=`Congratulations!,  Your Application is approved , You can start posting right away`
        }
        else{
            emailSubject="LastServe Restaurant Application reject"
            emailBody=`Your Application is rejected , the application has not been filled completely, please try again.`
        }
        const mailOptions = {
            from: "virajj60@gmail.com",
            to: restaurantId,
            subject: emailSubject,
            text: emailBody,
          };

          const info = await transporter.sendMail(mailOptions);
          response.status(204).send();


    } catch (error) {
        console.error(error);
        return response.status(503).json({
            "error": true,
            "message": "Internal Server Error"
        });
    }
};
exports.get_all_post = async (request, response) => {
    try {
        const email = request.headers.email;
        if (!email) {
            return response.status(401).json({ error: true, message: 'unauthorized' });
        }
        const db = await connectToDatabase();
        const adminCollection = db.collection('admin');
        const postCollection = db.collection('posts');
        //check if the admin exists to allow further processing
        const admin = await adminCollection.findOne({ _id: email });
        if (!admin) {
          return response.status(401).send({ error:true , message: 'unauthorized' });
        }
        //get all posts
        const posts = await postCollection
        .find()
        .toArray();
      return response.send(posts);
    } catch (error) {
        console.error(error);
        return response.status(503).json({
            "error": true,
            "message": "Internal Server Error"
        });
    }
};
exports.delete_post = async (request, response) => {
  try {
    const email = request.headers.email;
    if (!email) {
        return response.status(401).json({ error: true, message: 'unauthorized' });
    }
    const db = await connectToDatabase();
    const adminCollection = db.collection('admin');
    const postCollection = db.collection('posts');
    //check if the admin exists to allow further processing
    const admin = await adminCollection.findOne({ _id: email });
    if (!admin) {
      return response.status(401).send({ error:true , message: 'unauthorized.' });
    }
    //get request params
    const postId = request.params.postId;
    if (!postId) {
      return response.status(400).json({ error: true, message: 'bad request.' });
    }
    //check if the admin exists to allow further processing
    const post = await postCollection.findOne({ _id: new ObjectId(postId)});
    let restaurantEmail=post.rest_id;
    const updateResult = postCollection.deleteOne({ _id: new ObjectId(postId)});
    if(!updateResult){
        return response.status(503).json({
                "error": true,
                "message": "Internal Server Error"
            });

        }
    // mail the restaurant on post deletion 
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "virajj60@gmail.com",
          pass: process.env.gmail_pass,
        },
      });
  
      let emailSubject=""
      let emailBody=""
      console.log('post '+postId+' deleted successfully');
      emailSubject="Last serve deleted"
      emailBody=`Your post has been deleted due to compliance issues`
    
    const mailOptions = {
        from: "virajj60@gmail.com",
        to: restaurantEmail,
        subject: emailSubject,
        text: emailBody,
      };
      const info = await transporter.sendMail(mailOptions);
      response.status(204).send();

} catch (error) {
    console.error(error);
    return response.status(503).json({
        "error": true,
        "message": "Internal Server Error"
    });
}
};
exports.get_overview = async (request, response) => {
  try {
    const email = request.headers.email;
    if (!email) {
        return response.status(401).json({ error: true, message: 'unauthorized' });
    }
    const db = await connectToDatabase();
    const adminCollection = db.collection('admin');
    const postCollection = db.collection('posts');
    const restaurantsCollection = db.collection('restaurants');
    const usersCollection = db.collection('users');


    //check if the admin exists to allow further processing
    const admin = await adminCollection.findOne({ _id: email });
    if (!admin) {
      return response.status(401).send({ error:true , message: 'unauthorized.' });
    }
    let numberOfUsers= await usersCollection.countDocuments();
    let allRestaurantsCount= await restaurantsCollection.countDocuments();
    let pendingRestaurantsCount= await restaurantsCollection.countDocuments({isapproved: 0});
    let enrolledRestaurantCount= allRestaurantsCount-pendingRestaurantsCount;
    let posts = await postCollection.find().toArray();
    let activePosts = posts.filter(x => new Date(x.Start_Time) > new Date());
    let activePostsCount=activePosts.length;
    return response.status(200).json({
      "users": numberOfUsers,
      "enrolledRestaurants": enrolledRestaurantCount,
      "pendingRestaurants": pendingRestaurantsCount,
      "posts":posts.length,
      "activePostCount":activePostsCount,

  });

} catch (error) {
    console.error(error);
    return response.status(503).json({
        "error": true,
        "message": "Internal Server Error"
    });
}
};

