//Created by Neha Karkhanis

const { connectToDatabase } = require('../db/conn');
const bcrypt = require('bcrypt');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

exports.get_donor_list = async (request, response) => {
    try {
        const db = await connectToDatabase();
        const donation = await db.collection('donations').find().toArray();
        return response.status(200).json({
            "message": "Donations retrieved",
            "donation": donation
        });
    } catch (error) {
        console.error(error);
        return response.status(500).json({
            "message": "Internal Server Error"
        });
    }
};

exports.post_donation = async (request, response) => {
    try {
        bcrypt.genSalt(10, async function (err, salt) {
                const db = await connectToDatabase();
                db.collection('donations').insertOne({
                    "donationAmount": request.body.donationamount,
                    "donorName": request.body.donorname,
                    "donorPhoneNumber": request.body.donorphonenumber,
                    "address": request.body.address,
                    "city": request.body.city,
                    "pincode": request.body.pincode,
                    "email": request.body.email,
                    "cardNumber": request.body.cardnumber,
                    "expirationDate": request.body.expdate,
                    "cvv": request.body.cvv,
                });
                return response.status(200).json({
                    "message": "Donation Success"
                });
        });
    } catch (error) {
        console.error(error);
        return response.status(500).json({
            "message": "Internal Server Error"
        });
    }
};


