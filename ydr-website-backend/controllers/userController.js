const userModel = require("../models/userModel.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const validator = require("validator");
// require("dotenv").config();


const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_KEY);
};

const getUserProfile = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId)
    let userName = await userData.name
    res.json({success:true,userName})
  } catch (error) {
    console.log(error)
    res.json({success:false,message:'error'})
  }
}

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
//   console.log(name, email, password);

  try {
    //validating email and password
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Invalid Email" });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "password entered is too short",
      });
    }

    const isAlreadyExisting = await userModel.findOne({ email });

    if (isAlreadyExisting) {
      return res.json({ success: false, message: "User already exists" });
    }

    //hashing password using bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log(hashedPassword);

    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });
      
      const user = await newUser.save()

      console.log(user) 

      const token = createToken(user._id)
    //   console.log('token->',token)

      res.json({success:true,token})

  } catch (error) { 
    // console.log(`error-> ${error}`);
    res.json({ success: false, message: "Error occured in catch-> ", error });
  }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body
    
    console.log(email, password)
    
    try {
          const user = await userModel.findOne({ email });

          if (!user) {
            return res.json({ success: false, message: "User does not exist" });
        }
        
        const isUserMatched = await bcrypt.compare(password, user.password)
        
        if (!isUserMatched) {
            return res.json({success:false,message:'invalid password'})
        }


        const token = createToken(user._id)

        res.json({success:true,token})

    } catch (error) {
        console.log(`error-> ${error}`)
        res.json({ success: false, message: "User does not exist" });
    }
  



};

module.exports = { loginUser, registerUser,getUserProfile };
