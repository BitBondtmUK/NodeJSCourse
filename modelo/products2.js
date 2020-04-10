const mongoose = require('mongoose');
const product = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true    
    },
    cantidad:{
        type: Number,
        required: false
    }

});

module.exports = product; 
