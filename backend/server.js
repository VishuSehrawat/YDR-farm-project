const express = require('express')
const cors = require('cors')
const userRoutes = require('./routers/userRouter')
const connectDB = require('./config/db')
const cartRoutes = require('./routers/cartRouter')
const orderRoutes = require('./routers/orderRouter')
const adminRoutes = require('./routers/adminRouter')
require('dotenv').config()

const port = process.env.PORT ||4000
 
const app = express()

app.use(cors())
app.use(express.json())

connectDB()
 
//api endpoints
app.use('/images',express.static('uploads')) //to make the images publicly accessible as multer only gives the way to store images
app.use('/api/user', userRoutes) 
app.use('/api/cart', cartRoutes)
app.use('/api/order', orderRoutes)
app.use('/api/admin',adminRoutes)

app.listen(port, () => {
  console.log("server is running on port ", port);
}); 

app.get("/", (req, res) => {
  res.send("server is running");
});