//Created by Lav Patel (B00910579)
const express = require("express");
const volunteer_router = express.Router();

const volunteer_controller = require('../controller/restaurantVolunteerController');

volunteer_router.get('/volunteers', volunteer_controller.get_volunteer_list);
volunteer_router.get('/overview', volunteer_controller.get_overview);

module.exports = volunteer_router;