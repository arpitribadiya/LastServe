const express = require("express");
const subscriptionRouter = express.Router();
const subscriptionController = require("../controller/subscriptionController");

subscriptionRouter.post("/", subscriptionController.manageSubscription);
subscriptionRouter.post(
  "/restaurants",
  subscriptionController.getAllSubscriptions
);

module.exports = subscriptionRouter;
