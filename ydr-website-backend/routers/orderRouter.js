const express = require('express')
const authMiddleware = require('../middleware/auth')
const placeOrder = require('../controllers/orderController')

const orderRoutes = express.Router()

orderRoutes.post('/placeOrder', authMiddleware, placeOrder)

module.exports = orderRoutes