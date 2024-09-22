const express = require('express')
const { addToCart, removeFromCart, getCartData } = require('../controllers/cartController');
const authMiddleware = require('../middleware/auth');

const cartRoutes = express.Router()

cartRoutes.post("/add", authMiddleware, addToCart);
cartRoutes.post("/remove", authMiddleware, removeFromCart);
cartRoutes.post("/getCart", authMiddleware, getCartData);

module.exports = cartRoutes