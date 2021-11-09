const ProductController = require('../controllers/product.controllers');

module.exports = (app) => {
    app.get('/api/index', ProductController.index);
    app.post('/api/product/new', ProductController.createProduct);
}