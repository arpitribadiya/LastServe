const { connectToDatabase } = require("../db/conn");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const sgMail = require("@sendgrid/mail");
const { v4: uuid } = require("uuid");

// add and retrieve appointments

exports.getAllappointements = async (req, res) => {
  try {
    const db = await connectToDatabase();
    const orders = await db.collection("orders").find().toArray();
    return res.status(200).send({
      message: "Appointments retrieved",
      appointments: orders,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send({
      message: "Internal Server Error",
    });
  }
};

exports.addAppointment = async (req, res) => {
  try {
    const db = await connectToDatabase();
    const newID = uuid();
    db.collection("orders").insertOne({
      _id: newID,
      restaurant_id: req.body.rest_id,
      user_id: req.body.user_id,
      name: req.body.user_name,
      user_email: req.body.user_email,
      pickupDate: req.body.appointment_date,
      pickupTime: req.body.appointment_time,
      items: req.body.items,
      status: "not-picked",
    });
    const restaurant = await db
      .collection("restaurants")
      .findOne({ _id: req.body.rest_id });
    await db
      .collection("restaurants")
      .updateOne(
        { _id: req.body.rest_id },
        { $set: { orders: [...restaurant.orders, newID] } }
      );
    if (req.body.sendEmail) {
      // send email to the user
      const recieptHtml = `<table>
        <tr>
          <td>Name</td>
          <td>${req.body.user_name}</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>${req.body.user_email}</td>
        </tr>
        <tr>
          <td>Date</td>
          <td>${req.body.appointment_date}</td>
        </tr>
        <tr>
          <td>Time</td>
          <td>${req.body.appointment_time}</td>
        </tr>
      </table>`;

      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      const msg = {
        to: req.body.user_email,
        from: "jaykania232@gmail.com", // Use the email address or domain you verified above
        subject: "Appointment Details",
        text: "Appointment details",
        html: recieptHtml,
      };
      //ES6
      sgMail.send(msg).then(
        () => {},
        (error) => {
          console.error(error);

          if (error.response) {
            console.error(error.response.body);
          }
        }
      );
    }
    return res.status(200).send({
      message: "Appointment added successfully.",
    });
  } catch (err) {}
};
