const fs = require("fs");
const adminProductModel = require("../models/adminProductModel.js");
const orderModel = require("../models/orderModel.js");

const addProduct = async (req, res) => {
  let imageFilename = `${req.file.filename}`;

  const product = new adminProductModel({
    name: req.body.name,
    description: req.body.description,
    oldPrice: req.body.oldPrice,
    newPrice: req.body.newPrice,
    delivery: req.body.delivery,
    image: imageFilename,
  });

  console.log("product here", product);

  try {
    await product.save();
    res.json({ success: true, message: "Product added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: `error=> ${error}` });
  }
};

const listProducts = async (req, res) => {
  try {
    const allProducts = await adminProductModel.find({});
    res.json({ success: true, products: allProducts });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: `error-> ${error}` });
  }
};


const listUserOrders = async (req, res) => {
  try {
    const userOrders = await orderModel.find({});
    console.log(userOrders);
    res.json({ success: true, orders: userOrders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: `error-> ${error}` });
  }
};

const removeOrder = async (req, res) => {
  try {
    const productToRemove = await adminProductModel.findById(req.body.id);
    fs.unlink(`uploads/${productToRemove.image}`, () => {});
    await adminProductModel.findByIdAndDelete(req.body.id);
    res.json({
      success: true,
      removedProduct: productToRemove,
      message: "product removed",
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: `error-> ${error}` });
  }
};

const updateStatus = async (req, res) => {
  try {
    await orderModel.findByIdAndUpdate(req.body.orderId, {
      status: req.body.status,
    });
    res.json({ success: true, message: "status updated" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: `${error.message}` });
  }
};

module.exports = {
  addProduct,
  listProducts,
  listUserOrders,
  removeOrder,
  updateStatus
};



/*
const updateProduct = async (req, res) => {
  try {
      
      console.log('req body',req.body)
    res.json({ success: true, message: "product updated successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: `error-> ${error}` });
  }
};
*/