const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: String,
    price: Number,
    description: String,
    mainImage: String,
    tags: [String],
    sizes: [String],
    colors: [String],
    images: [String]
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;