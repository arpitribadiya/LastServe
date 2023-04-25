//Created by Lav Patel (B00910579)
const { connectToDatabase } = require('../db/conn');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

exports.get_volunteer_list = async (request, response) => {
    try {
        const db = await connectToDatabase();
        //get email from headers to authenticate the user
        const email = request.headers.email;
        if (!email) {
            return response.status(401).json({ error: true, message: 'unauthorized' });
        } 
        //check if the restaurant email exists
        const restaurantsCollection = db.collection('restaurants');
        const restaurant = await restaurantsCollection.findOne({ _id: email });
        if (!restaurant) {
          return response.status(401).send({ error:true , message: 'unauthorized' });
        }
        //get all volunteers from db 
        const volunteers = await db.collection('volunteers').find().toArray()
        return response.send(volunteers);
    } catch (error) {
        console.error(error);
        return response.status(503).json({
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

      const orderColection = db.collection('orders');
      const postCollection = db.collection('posts');
      const restaurantsCollection = db.collection('restaurants');
  
  
      //check if the admin exists to allow further processing
      const restaurant = await restaurantsCollection.findOne({ _id: email });
      if (!restaurant) {
        return response.status(401).send({ error:true , message: 'unauthorized.' });
      }

      let allRestaurantsCount= await restaurantsCollection.countDocuments();
      let pendingRestaurantsCount= await restaurantsCollection.countDocuments({isapproved: 0});
      let orders = await orderColection.find({
        restaurant_id:email
        }).toArray();
      let posts = await postCollection.find({
        rest_id:email
        }).toArray();
    let activeOrders = orders.filter(x => (x.status=="not-picked"||x.status=="packed" || x.status=="pending"));
    let activeOrdersCount=activeOrders.length;
      let activePosts = posts.filter(x => new Date(x.Start_Time) > new Date());
      let activePostsCount=activePosts.length;
      return response.status(200).json({

        "orders": orders.length,
        "activeOrders": activeOrdersCount,
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