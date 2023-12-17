const express = require('express')
const { CreateProduct, ReadProduct, ReadProductByID, UpdateProduct, DeleteProduct } = require('../controllers/ProductControllers')
const router = express.Router()

// Create Product
router.post('/create-product', CreateProduct)

// Read Product
router.get('/read-product', ReadProduct)

// Read Product By ID
router.get('/read-by-id/:id', ReadProductByID)

// Update Product
router.post('/update-product/:id', UpdateProduct)

// Delete Product
router.delete('/delete-product/:id', DeleteProduct)

module.exports = router
