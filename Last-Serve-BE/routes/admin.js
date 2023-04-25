//Created by lav
const express = require("express");
const admin_router = express.Router();

const admin_controller = require('../controller/adminController');


//Route the incoming GET,POST OR PUT requests with path <URL>/users/... 
admin_router.post('/login', admin_controller.post_validateAdmin);
admin_router.get('/overview', admin_controller.get_overview);
admin_router.get('/pendingrestaurantapplications', admin_controller.get_pending_restaurantApplication);
admin_router.post('/changerestaurantapplicationstatus/:restaurantId', admin_controller.post_change_restaurantApplication_status);
admin_router.get('/posts', admin_controller.get_all_post);
admin_router.delete('/post/:postId', admin_controller.delete_post);

module.exports = admin_router;