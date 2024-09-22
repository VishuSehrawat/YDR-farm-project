const express = require('express')
const cors = require('cors')
const userRoutes = require('./routers/userRouter')
const connectDB = require('./config/db')
const cartRoutes = require('./routers/cartRouter')
const orderRoutes = require('./routers/orderRouter')
require('dotenv').config()

const port = process.env.PORT ||4000
 
const app = express()

app.use(cors())
app.use(express.json())

connectDB()
 
//api endpoints
app.use('/api/user', userRoutes) 
app.use('/api/cart', cartRoutes)
app.use('/api/order',orderRoutes)

app.listen(port, () => {
  console.log("server is running on port ", port);
});

app.get("/", (req, res) => {
  res.send("server is running");
});