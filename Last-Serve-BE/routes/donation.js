//Created by Neha Karkhanis

const express = require("express");
const donations_router = express.Router();

const donationController = require('../controller/donationController');

donations_router.get('/', donationController.get_donor_list);
donations_router.post('/postDonation', donationController.post_donation);

module.exports = donations_router;