const mongoose = require('mongoose');
const modelo = require('../modelo/products2');

const Products = mongoose.model('Product', modelo);

const products = {};



products.addProduct = async (req, res) =>{
    let productoagregado = new Products(req.body);
    productoagregado.save()
        .then(data =>{
            res.json(data);
        })
    .catch(err =>{
        console.log(err);
    })

};

products.getProduct = async (req, res )=>{
    const listaproductos = await Products.find()
    .select("name cantidad")
    .exec()
    .then(data =>{
        res.status(202).json(data);
    })
    .catch(err =>{
        res.status(404).json({
            message: "Lista de productos vacios"
        })
    })
    //res.json(listaproductos);
} 

products.getProductid = async (req, res) =>{
    const id = req.params.id
    res.json(id);
    //console.log(id);
}

module.exports = products;