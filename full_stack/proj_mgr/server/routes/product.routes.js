const ProductController = require('../controllers/product.controllers');

module.exports = (app) => {
    app.get('/api/index', ProductController.index);
    app.get('/api/product', ProductController.getAllProducts);
    app.post('/api/product/new', ProductController.createProduct);
    app.get('/api/product/:_id', ProductController.getProduct);
    app.put('/api/product/:_id', ProductController.updateProduct);
    app.delete('/api/product/:id', ProductController.deleteProduct);
}

