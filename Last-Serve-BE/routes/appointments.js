const express = require("express");
const appointmentRouter = express.Router();
const aappointmentController = require("../controller/appointmentController");

appointmentRouter.get("/:id", aappointmentController.getAllappointements);
appointmentRouter.post("/", aappointmentController.addAppointment);

module.exports = appointmentRouter;
