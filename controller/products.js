const mongoose = require('mongoose');
const modelo = require('../modelo/products2');

const Products = mongoose.model('Product', modelo);

const products = {};

products.addProduct = async (req, res) =>{
    let productoagregado = new Products(req.body);
    productoagregado.save((err, values) => {
        if(err) throw err
        res.json(value);
    })
    
};

products.getProduct = async (re, res) =>{
    const listaproducts = await Products.find();
    res.json(lista.productos);
}

module.exports = products;