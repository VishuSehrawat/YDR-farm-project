const express = require("express");
const multer = require("multer");
const { registerUser, loginUser, getUserProfile } = require("../controllers/userController");
const authMiddleware  = require("../middleware/auth.js");

const userRoutes = express.Router();

userRoutes.post("/register", registerUser);
userRoutes.post("/login", loginUser);
userRoutes.post("/getProfile",authMiddleware, getUserProfile); 

module.exports = userRoutes;
 