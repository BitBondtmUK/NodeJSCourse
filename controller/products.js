const mongoose = require('mongoose');
const modelo = require('../model/product');

const Products = mongoose.model('Product', modelo);

const products = {};

products.addProduct = async (req, res) =>{
    const name = req.params.name;
    console.log(name);
};

module.exports = products;