// Created by Jay Kania (B00923785)
// Updated By Arpit Ribadiya (B00932018)

const { connectToDatabase } = require("../db/conn");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const bcrypt = require("bcrypt");
var mongo = require("mongodb");

// retrieve all posts or based on res_id

exports.getAllPosts = async (req, res) => {
  try {
    const db = await connectToDatabase();
    const posts = await db.collection("posts").find().toArray();
    return res.status(200).json({
      message: "Posts retrieved",
      posts,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

exports.getPostsByResID = async (req, res) => {
  try {
    const db = await connectToDatabase();
    console.log(req.body.res_id);
    const res_email = req.body.res_email;
    const restaurants = await db.collection("restaurants").find().toArray();
    console.log(restaurants);
    const resPosts = restaurants.find((res) => {
      return res._id === res_email;
    });

    if (resPosts) {
      return res.status(200).json({
        message: "Posts retrieved from restaurant",
        posts: resPosts.posts,
      });
    } else {
      return res.status(400).json({
        message: "No such restaurant exists!",
      });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

exports.post_create_post = async (request, response) => {
  try {
    bcrypt.genSalt(10, async function (err, salt) {
      let restaurantName;
      const db = await connectToDatabase();

      db.collection("restaurants")
        .findOne({
          email: request.body.restId,
        })
        .then((restaurant) => {
          db.collection("posts").insertOne({
            rest_id: request.body.restId,
            rest_name: restaurant.name,
            Item_name: request.body.itemName,
            Item_Quantity: request.body.itemQuantity,
            Start_Time: request.body.startTime,
            End_Time: request.body.endTime,
            Food_Type: request.body.foodType,
            CreationTime: new Date(),
          });
          return response.status(200).json({
            message: "Post Created Successfully!!!",
          });
        });
    });
  } catch (error) {
    console.error(error);
    return response.status(500).json({
      message: "Internal Server Error",
    });
  }
};

exports.put_update_post = async (request, response) => {
  try {
    const db = await connectToDatabase();
    db.collection("posts").updateOne(
      { _id: new mongo.ObjectId(request.body.id) },
      {
        $set: {
          Item_name: request.body.itemName,
          Item_Quantity: request.body.itemQuantity,
          Start_Time: request.body.startTime,
          End_Time: request.body.endTime,
          Food_Type: request.body.foodType,
        },
      }
    );
    return response.status(200).json({
      message: "Post Updated Successfully!!!",
    });
  } catch (error) {
    console.log(error);
    return response.status(500).json({
      message: "Internal Server Error",
    });
  }
};

exports.get_active_post = async (req, res) => {
  try {
    const db = await connectToDatabase();
    const posts = await db.collection("posts").find().toArray();
    console.log(req.params.restId);

    let output = posts.filter(
      (x) =>
        x.rest_id === req.params.restId && new Date(x.Start_Time) > new Date()
    );
    if (output) {
      return res.status(200).json({
        message: "Active Posts retrieved successfully!!!",
        posts: output,
      });
    } else {
      return res.status(400).json({
        message: "No such posts exists!",
      });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

exports.get_past_post = async (req, res) => {
  try {
    const db = await connectToDatabase();
    const posts = await db.collection("posts").find().toArray();

    let output = posts.filter(
      (x) =>
        x.rest_id === req.params.restId && new Date(x.Start_Time) <= new Date()
    );
    if (output) {
      return res.status(200).json({
        message: "Past Posts retrieved successfully!!!",
        posts: output,
      });
    } else {
      return res.status(400).json({
        message: "No such posts exists!",
      });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

exports.get_post_by_id = async (req, res) => {
  try {
    const db = await connectToDatabase();
    console.log(req.params.id);
    db.collection("posts")
      .findOne({
        _id: new mongo.ObjectId(req.params.id),
      })
      .then((post) => {
        console.log(post);
        const result = {
          id: post._id,
          itemName: post.Item_name,
          itemQuantity: post.Item_Quantity,
          startTime: post.Start_Time,
          endTime: post.End_Time,
          foodType: post.Food_Type,
        };
        return res.status(200).json({
          post: result,
        });
      });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
