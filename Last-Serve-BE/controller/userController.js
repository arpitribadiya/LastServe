//Created by Viraj Joshi
// Updated by Jay Kania
const { connectToDatabase } = require("../db/conn");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const path = require("path");
const { ObjectId } = require("mongodb");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

exports.get_user_list = async (request, response) => {
  try {
    const db = await connectToDatabase();
    const users = await db.collection("users").find().toArray();
    return response.status(200).json({
      message: "Users retrieved",
      users: users,
    });
  } catch (error) {
    console.error(error);
    return response.status(500).json({
      message: "Internal Server Error",
    });
  }
};

exports.get_user_details = async (request, response) => {
  try {
    const db = await connectToDatabase();
    const user = await db.collection("users").findOne({
      _id: request.params.email,
    });
    if (user) {
      return response.status(200).json({
        fname: user.fname,
        lname: user.lname,
        email: user._id,
      });
    } else {
      return response.status(400).json({
        message: "No user details found",
      });
    }
  } catch (error) {
    console.error(error);
  }
};

exports.post_user_signup = async (request, response) => {
  try {
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(
        request.body.password,
        salt,
        async function (err, password_hash) {
          const db = await connectToDatabase();
          db.collection("users").insertOne({
            fname: request.body.fname,
            lname: request.body.lname,
            _id: request.body.email,
            password: password_hash,
            subscribed_restaurants: [],
            orders: [],
            isLoggedIn: true,
          });
          return response.status(200).json({
            message: "Registration Success",
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

exports.post_existing_email_chk = async (request, response) => {
  try {
    const db = await connectToDatabase();
    db.collection("users")
      .findOne({
        _id: request.body.email,
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

exports.post_validateUser = async (request, response) => {
  try {
    const db = await connectToDatabase();
    db.collection("users")
      .findOne({ _id: request.body.email })
      .then((user) => {
        if (user) {
          bcrypt
            .compare(request.body.password, user.password)
            .then(async (isMatch) => {
              if (isMatch) {
                await db
                  .collection("users")
                  .updateOne(
                    { _id: request.body.email },
                    { $set: { isLoggedIn: true } }
                  );
                return response.status(200).json({
                  message: "Authentication successful",
                });
              } else {
                return response.status(403).json({
                  message: "Invalid User",
                });
              }
            });
        } else {
          return response.status(403).json({
            message: "Invalid user",
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

exports.put_update_user = async (request, response) => {
  try {
    const db = await connectToDatabase();
    db.collection("users").updateOne(
      { _id: request.body.email },
      { $set: { fname: request.body.fname, lname: request.body.lname } }
    );
    return response.status(200).json({
      message: "User Updated",
    });
  } catch (error) {
    return response.status(500).json({
      message: "Internal Server Error",
    });
  }
};

exports.get_pass_reset_key = async (request, response) => {
  try {
    const key = Math.random().toString(36).substring(2, 8);
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "virajj60@gmail.com", //Password reset key would from this email address
        pass: process.env.gmail_pass,
      },
    });

    const mailOptions = {
      from: "virajj60@gmail.com",
      to: request.params.email,
      subject: "LastServe Password Reset Key",
      text: `Your generated key is ${key}. Please use this key to reset your password.`,
    };

    const info = await transporter.sendMail(mailOptions);

    const db = await connectToDatabase();
    db.collection("users")
      .updateOne({ _id: request.params.email }, { $set: { resetkey: key } })
      .then(
        response.status(200).json({
          message: "Reset key saved",
        })
      );
  } catch (error) {
    console.error(error);
    return response.status(500).json({
      message: "Internal Server Error",
    });
  }
};

exports.post_verify_resetkey = async (request, response) => {
  try {
    const db = await connectToDatabase();
    db.collection("users")
      .findOne({ _id: request.body.email })
      .then((user) => {
        if (user) {
          if (user.resetkey === request.body.resetKey) {
            return response.status(200).json({
              message: "Keys match",
            });
          } else {
            return response.status(403).json({
              message: "Invalid key",
            });
          }
        } else {
          return response.status(403).json({
            message: "Invalid key",
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

exports.put_update_pass = async (request, response) => {
  try {
    const db = await connectToDatabase();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(request.body.newPassword, salt);
    db.collection("users").updateOne(
      { _id: request.body.email },
      { $set: { password: hashedPassword } }
    );
    return response.status(200).json({
      message: "Password Updated",
    });
  } catch (error) {
    return response.status(500).json({
      message: "Internal Server Error",
    });
  }
};

exports.isLoggedIn = async (request, response) => {
  try {
    const email = request.body.email;
    const db = await connectToDatabase();
    const result = await db
      .collection("users")
      .findOne({ _id: email, isLoggedIn: true });
    if (result) {
      return response.status(200).send({ message: true });
    } else {
      response.status(200).send({ message: false });
    }
  } catch (error) {
    return response.status(500).json({
      message: "Internal Server Error",
    });
  }
};

exports.logout = async (request, response) => {
  try {
    const email = request.body.email;
    const db = await connectToDatabase();
    const result = db
      .collection("users")
      .updateOne({ _id: email }, { $set: { isLoggedIn: false } });
    return response.status(200).send({ message: "Successfully logged out." });
  } catch (error) {
    console.error(error);
    return response.status(500).json({
      message: "Internal Server Error",
    });
  }
};

exports.getSubscribedRestaurants = async (request, response) => {
  try {
    const db = await connectToDatabase();
    const user = await db.collection("users").findOne({
      _id: request.body.email,
    });
    if (user) {
      return response.status(200).send({
        subscribed_restaurants: user.subscribed_restaurants,
      });
    } else {
      return response.status(400).send({
        message: "No user details found",
      });
    }
  } catch (error) {
    console.error(error);
  }
};

exports.post_user_orders = async (req, res) => {
  try {
    const db = await connectToDatabase();
    const orders = await db.collection('orders').find({ user_id: req.body.email }).toArray();
    if (orders) {
      return res.status(200).send(
        orders
      );
    } else {
      return res.status(400).json({
        'message': 'No orders found for user'
      })
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      'message': 'Internal Server Error'
    });
  }
};

exports.delete_user_order = async (req, res) => {
  try {
    console.log(req.body);
    const db = await connectToDatabase();
    const deleteResult = await db.collection('orders').deleteOne({ _id: req.body.id });
    if (deleteResult.deletedCount > 0) {
      return res.status(200).json({
        'message': 'Deleted order successfully'
      });
    } else {
      return res.status(400).json({
        'message': 'No order to delete'
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      'message': 'Internal Server Error'
    });
  }
};