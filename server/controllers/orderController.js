const Order = require("../models/order");
const User = require("../models/user")
const jwt = require("jsonwebtoken");

const createOrder = async (req, res) => {
    try {
        const {dining_hall, creator_username, food_order, notes_for_deliverer} = req.body;
        const order = await Order.create({
            dining_hall,
            creator_username,
            food_order,
            notes_for_deliverer,
            active: true,
            out_for_delivery: false,
        });
        const user = await User.findOne({username: creator_username});
        user.active_orders.push(order)
        await user.save();
        jwt.sign({email: user.email, id: user._id, username: user.username, active_orders: user.active_orders}, process.env.JWT_SECRET, {}, (err, token) => {
            if(err) throw err;
            res.cookie('token', token).json({user: user, order: order});

        })
        // return res.json({order: order, user: user});

        
    } catch (error) {
        console.log(error)
        
    }
}

const getOrder = async (req, res) => {
    try {
        const{orderId} = req.query;
        const order = await Order.findOne({_id: orderId});
        const user = await User.findOne({username: order.creator_username});
        res.json({orderId: orderId, orderDetails: order, creator: user});
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = {
    createOrder,
    getOrder,
}