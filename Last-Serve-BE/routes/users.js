//Created by Viraj Joshi
const express = require("express");
const user_router = express.Router();

const user_controller = require("../controller/userController");

//Route the incoming GET,POST OR PUT requests with path <URL>/users/...
user_router.get("/", user_controller.get_user_list);
user_router.post("/register", user_controller.post_user_signup);
user_router.post("/checkEmail", user_controller.post_existing_email_chk);
user_router.post("/login", user_controller.post_validateUser);
user_router.get("/:email", user_controller.get_user_details);
user_router.put("/update", user_controller.put_update_user);
user_router.get("/resetKey/:email", user_controller.get_pass_reset_key);
user_router.post("/verifyKey", user_controller.post_verify_resetkey);
user_router.put("/updatePassword", user_controller.put_update_pass);
user_router.post("/loggedIn", user_controller.isLoggedIn);
user_router.post("/logout", user_controller.logout);
user_router.post("/restaurants", user_controller.getSubscribedRestaurants);
user_router.post("/orders", user_controller.post_user_orders);
user_router.delete("/cancelOrder", user_controller.delete_user_order);

module.exports = user_router;
