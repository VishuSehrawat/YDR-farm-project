const express = require('express')
const cors = require('cors')
const userRoutes = require('./routers/userRouter')
const connectDB = require('./config/db')
require('dotenv').config()

const port = process.env.PORT ||4000
 
const app = express()

app.use(cors())
app.use(express.json())

connectDB()

//api endpoints
app.use('/api/user', userRoutes)


app.listen(port, () => {
  console.log("server is running on port ", port);
});

app.get("/", (req, res) => {
  res.send("server is running");
});