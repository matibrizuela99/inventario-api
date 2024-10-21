const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    cantidad: { type: Number, required: true },
    precio: { type: Number, required: true }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

