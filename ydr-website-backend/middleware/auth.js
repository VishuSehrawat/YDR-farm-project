const jwt = require('jsonwebtoken')
require("dotenv").config();

const authMiddleware = async (req, res, next) => {
  const { token } = req.headers
  
  if (!token) {
    res.send({success:false,message:'Not authorized, Login again'})
  }
 
  try {
    const tokenDecoded = jwt.verify(token, process.env.JWT_KEY)
    req.body.userId = tokenDecoded.id
    next()

  } catch (error) {
    console.log(error)
    res.json({success:false,message:`error-> ${error}`})
  }
}

module.exports = authMiddleware 

