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

module.exports.getAllProducts = (req, res) => {
    Product.find({})
    .then(persons => res.json(persons))
    .catch(err => res.json(err))
}

module.exports.getProduct = (req, res) => {
    Product.findOne({
        _id: req.params._id})
        .then(product => res.json(product))
        .catch(err => res.json(err))
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id: req.params._id}, req.body, {new: true})
    .then(updatedProduct => {res.json(updatedProduct)})
    .catch(err => {res.json(err)})
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
    .then(deleteConfirmation => res.json(deleteConfirmation))
    .catch(err => res.json(err))
}