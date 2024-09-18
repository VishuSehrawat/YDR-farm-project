const express = require('express')
const multer = require('multer')
const { registerUser, loginUser } = require('../controllers/userController')

const userRoutes = express.Router()

userRoutes.post('/register', registerUser)
userRoutes.post("/login", loginUser);

module.exports = userRoutes