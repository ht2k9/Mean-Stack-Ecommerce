const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMangoose = require("passport-local-mongoose");

const productSchema = new Schema({
    title: String,
    price: Number,
    description: String,
    mainImage: String,
    sizes: Array,
    colors: Array,
    images: Array
});

productSchema.plugin(passportLocalMangoose);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;