//Created By Arpit Ribadiya (B00932018)


const express = require("express");
const restaurant_router = express.Router();

const restaurant_controller = require('../controller/restaurantController');

restaurant_router.get('/', restaurant_controller.get_restaurant_list);
restaurant_router.post('/register', restaurant_controller.post_restaurant_signup);
restaurant_router.post('/checkEmail', restaurant_controller.post_existing_email_chk_for_restaurant);
restaurant_router.post('/login', restaurant_controller.post_restaurant_login);
restaurant_router.put('/updateRestaurant', restaurant_controller.put_update_restaurant);
restaurant_router.post('/viewRestaurant', restaurant_controller.get_view_restaurant_details);

module.exports = restaurant_router;