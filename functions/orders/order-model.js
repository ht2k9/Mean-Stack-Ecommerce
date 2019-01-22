const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const product = require('../products/product-model')

const orderSchema = new Schema({
    costumer: {
        name: String,
        phone: Number,
        address: String,
        email: String
    },
    date_required: Date,
    products: [product.schema],
    status: {type: String, default: 'pending'}
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;