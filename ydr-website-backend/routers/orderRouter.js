const express = require('express')
const authMiddleware = require('../middleware/auth');
const { placeOrder, verifyOrder, findUserOrders } = require('../controllers/orderController');



const orderRoutes = express.Router() 

orderRoutes.post('/placeOrder', authMiddleware, placeOrder)
orderRoutes.post("/verifyOrder", verifyOrder);
orderRoutes.post("/userOrders", authMiddleware, findUserOrders);
 



module.exports = orderRoutes