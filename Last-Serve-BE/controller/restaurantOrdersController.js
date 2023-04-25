//Created by Lav Patel (B00910579)
const { connectToDatabase } = require('../db/conn');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

exports.post_change_order_status = async (request, response) => {
    try {
        //get email from headers to authenticate
        const email = request.headers.email;
        if (!email) {
            return response.status(401).json({ error: true, message: 'unauthorized' });
        } 
        //get request params
        const orderId = request.params.orderId;
        const newStatus = request.body.status;
        if (!orderId||!newStatus) {
          return response.status(400).json({ error: true, message: 'bad request.' });
        }
        const db = await connectToDatabase();
        const restaurantsCollection = db.collection('restaurants');
        const ordersCollection = db.collection('orders');
        //check if the restaurant exists to allow further processing
        const restaurant = await restaurantsCollection.findOne({ _id: email });
        if (!restaurant) {
          return response.status(401).send({ error:true , message: 'unauthorized' });
        }
        // find the order by orderId and update its status
        const updateResult = ordersCollection.updateOne({ _id: orderId }, { $set: { status: newStatus } });
        if(!updateResult){
            return response.status(503).json({
                "error": true,
                "message": "Internal Server Error"
            });

        }
        
      console.log('Order '+orderId+' status updated successfully');
      response.status(204).send();

    } catch (error) {
        console.error(error);
        return response.status(503).json({
            "error": true,
            "message": "Internal Server Error"
        });
    }
};

exports.get_past_orders = async (request, response) => {
    try {
        const email = request.headers.email;
        if (!email) {
            return response.status(401).json({ error: true, message: 'unauthorized' });
        }
        const db = await connectToDatabase();
        const restaurantsCollection = db.collection('restaurants');
        const ordersCollection = db.collection('orders');
        //check if the restaurant exists to allow further processing
        const restaurant = await restaurantsCollection.findOne({ _id: email });
        if (!restaurant) {
          return response.status(401).send({ error:true , message: 'unauthorized' });
        }
        //get all the orderId of the restaurant
        const orderIds = restaurant.orders;
        //get the orderdetails of all the orders whose status id 'picked'
        const orders = await ordersCollection
        .find({ _id: { $in: orderIds.map((_id) => (_id)) }, status: 'picked' })
        .toArray();
      return response.send(orders);
    } catch (error) {
        console.error(error);
        return response.status(503).json({
            "error": true,
            "message": "Internal Server Error"
        });
    }
};
exports.get_active_orders = async (request, response) => {
    try {
        const email = request.headers.email;
        if (!email) {
            return response.status(401).json({ error: true, message: 'unauthorized' });
        }
        const db = await connectToDatabase();
        const restaurantsCollection = db.collection('restaurants');
        const ordersCollection = db.collection('orders');
        //check if the restaurant exists to allow further processing
        const restaurant = await restaurantsCollection.findOne({ _id: email });
        if (!restaurant) {
          return response.status(401).send({ error:true , message: 'unauthorized' });
        }
        //get all the orderId of the restaurant
        const orderIds = restaurant.orders;
        //get the orderdetails of all the orders whose status is 'packed'or 'pending'
        const orders = await ordersCollection
        .find({
          $and: [
            { _id: { $in: orderIds.map((_id) => (_id)) } },
            {$or: [{ status: 'pending' },{ status: 'not-picked' },{ status: 'packed' },],},
          ],
        })
        .toArray();
      return response.send(orders);
    } catch (error) {
        console.error(error);
        return response.status(503).json({
            "error": true,
            "message": "Internal Server Error"
        });
    }
};
