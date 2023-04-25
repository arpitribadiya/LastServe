//Created by Neha Karkhanis

const { connectToDatabase } = require('../db/conn');
const bcrypt = require('bcrypt');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

exports.get_volunteers_list = async (request, response) => {
    try {
        const db = await connectToDatabase();
        const volunteers = await db.collection('volunteers').find().toArray();
        return response.status(200).json({
            "message": "Volunteers retrieved",
            "volunteers": volunteers
        });
    } catch (error) {
        console.error(error);
        return response.status(500).json({
            "message": "Internal Server Error"
        });
    }
};


exports.post_volunteers_signup = async (request, response) => {
    try {
        bcrypt.genSalt(10, async function (err, salt) {
                const db = await connectToDatabase();
                db.collection('volunteers').insertOne({
                    "volunteername": request.body.volunteername,
                    "phonenumber": request.body.phonenumber,
                    "email": request.body.email,
                    "gender": request.body.gender,
                    "occupation": request.body.occupation,
                    "availibility": request.body.availibility
                });
                return response.status(200).json({
                    "message": "Volunteer Registration Success"
                });
        });
    } catch (error) {
        console.error(error);
        return response.status(500).json({
            "message": "Internal Server Error"
        });
    }
};

exports.post_existing_email_chk_for_volunteers = async (request, response) => {
    try {
        const db = await connectToDatabase();
        db.collection('volunteers').findOne({
            'email': request.body.email
        }).then(user => {
            if (user) {
                return response.status(400).json({
                    "message": "Email already used"
                })
            } else {
                return response.status(200).json({
                    "message": "Email not used"
                })
            }
        })
    } catch (error) {
        console.error(error);
        return response.status(500).json({
            "message": "Internal Server Error"
        });
    }
};
