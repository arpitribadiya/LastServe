const { connectToDatabase } = require("../db/conn");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

exports.manageSubscription = async (req, res) => {
  const res_id = req.body.res_id;
  const email = req.body.email;
  const action = req.body.action;
  const res_email = req.body.res_email;

  if (action === "subscribe") {
    try {
      const db = await connectToDatabase();

      // updating users collection
      const usersCollection = await db.collection("users");
      await usersCollection.updateOne(
        { _id: email, subscribed_restaurants: { $ne: res_email } },
        { $addToSet: { subscribed_restaurants: res_email } }
      );

      // updating restaurants collection
      const restaurantsCollection = await db.collection("restaurants");
      console.log(res_email);
      await restaurantsCollection.updateOne(
        { _id: res_email, subscribed_users: { $ne: email } },
        { $addToSet: { subscribed_users: email } }
      );

      return res.status(200).send({
        message: "Subscribed Successfully!",
      });
    } catch (err) {
      console.error(err);
      res.status(500).send({
        message: "Internal server error!",
      });
    }
  } else if (action === "unsubscribe") {
    try {
      const db = await connectToDatabase();

      // updating users collection
      const usersCollection = await db.collection("users");
      await usersCollection.updateOne(
        { _id: email },
        { $pull: { subscribed_restaurants: res_email } }
      );

      // updating restaurants collection
      const restaurantsCollection = await db.collection("restaurants");
      restaurantsCollection.updateOne(
        { _id: res_email },
        { $pull: { subscribed_users: email } }
      );

      return res.status(200).send({
        message: "Unsubscribed successfully!",
      });
    } catch (err) {
      res.status(500).send({
        message: "Internal server error!",
      });
    }
  } else {
    return res.status(400).send({
      message: "Invalid operation!",
    });
  }
};

exports.getAllSubscriptions = async (req, res) => {
  const email = req.body.email;
  try {
    const db = await connectToDatabase();
    const user = await db.collection("users").findOne({ _id: email });
    return res.status(200).send({
      subscribed_restaurants: user.subscribed_restaurants,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send({
      message: "Internal server error!",
    });
  }
};
