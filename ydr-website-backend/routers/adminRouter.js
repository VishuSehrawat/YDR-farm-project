const express = require("express");
const {
  addProduct,
  listProducts,
  listUserOrders,
  removeOrder,
  updateStatus,
  
} = require("../controllers/adminController");
const multer = require("multer");

const adminRoutes = express.Router();

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

adminRoutes.post("/addProduct", upload.single("image"), addProduct);
adminRoutes.get("/listProducts", listProducts);
adminRoutes.get("/listUserOrders", listUserOrders);
adminRoutes.post("/removeOrder", removeOrder);
adminRoutes.post('/updateStatus',updateStatus)

module.exports = adminRoutes;




// adminRoutes.post("/updateProduct", updateProduct);