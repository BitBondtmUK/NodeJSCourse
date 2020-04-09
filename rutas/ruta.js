const express = require('express');
const routes = express.Router();
const producto = require('../controller/products');

routes.get('/', producto.getProduct);

routes.post('/', producto.addProduct);

routes.get('/:productid', (req, res) =>{
    res.send('Obtengo informacion de un producto')
})

routes.put('/:productid', (req, res) =>{
    res.send('Estoy en seccion de actualizar el producto')
})

routes.delete('/:productid',(req, res) =>{
    res.send('Estoy en seccion de borrar el producto')
})

module.exports = routes;

