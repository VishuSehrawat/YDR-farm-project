const userModel = require('../models/userModel')

const addToCart = async (req, res) => {
    const userId = req.body.userId
    const itemId = req.body.itemId
    try {
        const user = await userModel.findById({ _id: userId })
        const cartData = await user.cartData

        if (!cartData[itemId]) {
            cartData[itemId]=1
        }
        else {
            cartData[itemId]+=1
        }

        await userModel.findByIdAndUpdate(userId, { cartData })
        res.json({success:true,message:'item added to cart'})
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:`error-> ${error}`})
    }
 }

const removeFromCart = async (req, res) => { 
    const userId = req.body.userId
    const itemId = req.body.itemId

    try {
          const user = await userModel.findById({ _id: userId });
          const cartData = await user.cartData;

          if (cartData[itemId] > 0) {
            cartData[itemId] -= 1;
          }

          await userModel.findByIdAndUpdate(userId, { cartData });
          const user1 = await userModel.findById({ _id: userId });
          console.log(user1);
          res.json({ success: true, message: "item removed from cart" });
    } catch (error) {
        res.json({success:false,message:`error-> ${error}`})
    }

  

}

const getCartData = async (req, res) => { 
    const userId = req.body.userId;
    
    try {
        const user = await userModel.findById({ _id: userId })
        const cartData = user.cartData
        
        res.json({success:true,cartData})
    } catch (error) {
        res.json({success:false,message:`error-> ${error}`}) 
    }
}

module.exports = {addToCart,removeFromCart,getCartData}