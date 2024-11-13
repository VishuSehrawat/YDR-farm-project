const mongoose = require('mongoose')

const connectDB = () => {
    
    mongoose
    .connect(
        "mongodb+srv://YDRadmin:lzNziZVjZzUIBwF7@ydrfarmcluster.cuec3.mongodb.net/?retryWrites=true&w=majority&appName=ydrFarmCluster"
        )
        .then(() => {
            console.log("mongodb connected");
        });
    }

  module.exports = connectDB