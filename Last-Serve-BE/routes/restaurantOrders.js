//Created by Lav Patel (B00910579)
const express = require("express");
const restaurantOrders_router = express.Router();
const restaurantOrders_controller = require('../controller/restaurantOrdersController');
restaurantOrders_router.post('/changeorderstatus/:orderId', restaurantOrders_controller.post_change_order_status);
restaurantOrders_router.get('/pastorders/', restaurantOrders_controller.get_past_orders);
restaurantOrders_router.get('/activeorders/', restaurantOrders_controller.get_active_orders);

module.exports = restaurantOrders_router;