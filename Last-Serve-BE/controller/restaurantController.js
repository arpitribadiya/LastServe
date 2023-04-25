const { connectToDatabase } = require("../db/conn");
const bcrypt = require("bcrypt");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

exports.get_restaurant_list = async (request, response) => {
  try {
    const db = await connectToDatabase();
    const restaurants = await db.collection("restaurants").find().toArray();
    return response.status(200).json({
      message: "Restaurants retrieved",
      restaurants: restaurants,
    });
  } catch (error) {
    console.error(error);
    return response.status(500).json({
      message: "Internal Server Error",
    });
  }
};

exports.post_restaurant_signup = async (request, response) => {
  try {
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(
        request.body.password,
        salt,
        async function (err, password_hash) {
          const db = await connectToDatabase();
          db.collection("restaurants").insertOne({
            _id: request.body.email,
            name: request.body.name,
            address: request.body.address,
            postalcode: request.body.postalcode,
            phonenumber: request.body.phonenumber,
            email: request.body.email,
            password: password_hash,
            isapproved: request.body.isapproved,
            posts: [],
            orders: [],
          });
          return response.status(200).json({
            message: "Restaurant Registration Success",
          });
        }
      );
    });
  } catch (error) {
    console.error(error);
    return response.status(500).json({
      message: "Internal Server Error",
    });
  }
};

exports.post_existing_email_chk_for_restaurant = async (request, response) => {
  try {
    const db = await connectToDatabase();
    db.collection("restaurants")
      .findOne({
        email: request.body.email,
      })
      .then((user) => {
        if (user) {
          return response.status(400).json({
            message: "Email already exists",
          });
        } else {
          return response.status(200).json({
            message: "No email exists",
          });
        }
      });
  } catch (error) {
    console.error(error);
    return response.status(500).json({
      message: "Internal Server Error",
    });
  }
};

exports.post_restaurant_login = async (request, response) => {
  try {
    const db = await connectToDatabase();
    db.collection("restaurants")
      .findOne({ email: request.body.email })
      .then((restaurant) => {
        if (restaurant) {
          bcrypt
            .compare(request.body.password, restaurant.password)
            .then((isMatch) => {
              if (isMatch) {
                return response.status(200).json({
                  message: "Authentication successful",
                });
              } else {
                return response.status(403).json({
                  message: "Invalid Restaurant",
                });
              }
            });
        } else {
          return response.status(403).json({
            message: "Invalid Restaurant",
          });
        }
      });
  } catch (error) {
    console.error(error);
    return response.status(500).json({
      message: "Internal Server Error",
    });
  }
};

exports.put_update_restaurant = async (request, response) => {
  try {
    const db = await connectToDatabase();
    db.collection("restaurants").updateOne(
      { email: request.body.email },
      {
        $set: {
          name: request.body.name,
          address: request.body.address,
          postalcode: request.body.postalcode,
          phonenumber: request.body.phonenumber,
        },
      }
    );
    return response.status(200).json({
      message: "Restaurant Updated",
    });
  } catch (error) {
    return response.status(500).json({
      message: "Internal Server Error",
    });
  }
};

exports.get_view_restaurant_details = async (request, response) => {
  try {
    const db = await connectToDatabase();
    db.collection("restaurants")
      .findOne({
        email: request.body.email,
      })
      .then((restaurant) => {
        const result = {
          name: restaurant.name,
          email: restaurant.email,
          address: restaurant.address,
          postalcode: restaurant.postalcode,
          phonenumber: restaurant.phonenumber,
        };
        return response.status(200).json({
          restaurant: result,
        });
      });
  } catch (error) {
    console.error(error);
    return response.status(500).json({
      message: "Internal Server Error",
    });
  }
};
