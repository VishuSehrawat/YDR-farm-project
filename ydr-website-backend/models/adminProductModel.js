const mongoose = require('mongoose')

const adminProductSchema = new mongoose.Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  oldPrice: { type: Number, required: true },
  newPrice: { type: Number, required: true },
  delivery: { type: Number, required: true },
});

const adminProductModel = mongoose.models.adminProductModel || mongoose.model('adminProductModel', adminProductSchema)

module.exports = adminProductModel