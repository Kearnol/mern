const { response } = require('express');
const {Product} = require('../models/product.model')

module.exports.index = (req, res) => {
    res.json({message: "You made it!"});
}

module.exports.createProduct = (req, res) => { 
    const {title, price, description} = req.body;
    Product.create({
        title, price, description
    })
        .then(product => res.json(product))
        .catch(err => console.log(err));
}

