const express = require('express');
const Product = require('../models/product.model.js');
const router = express.Router();
const {getProducts, getSingleProduct, createProduct, updateProdcut, deleteProduct} = require('../controllers/product.controller.js')



router.get('/',getProducts);
// Get Product
router.get('/:id',getSingleProduct)
// Post Product
router.post('/', createProduct);
// Update Product
router.put('/:id', updateProdcut);
// Delete Product
router.delete('/:id', deleteProduct);

module.exports = router