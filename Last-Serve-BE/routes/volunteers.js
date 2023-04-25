//Created by Neha Karkhanis

const express = require("express");
const volunteers_router = express.Router();

const volunteers_controller = require('../controller/volunteerController');

volunteers_router.get('/', volunteers_controller.get_volunteers_list);
volunteers_router.post('/register', volunteers_controller.post_volunteers_signup);
volunteers_router.post('/checkEmail', volunteers_controller.post_existing_email_chk_for_volunteers);

module.exports = volunteers_router;