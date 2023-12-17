const ProductModel = require('../models/ProductsModel')

// Create Product
exports.CreateProduct = (req, res) => {
    const reqBody = req.body

    ProductModel.create(reqBody)
    .then((data) => {
        res.status(201).json({status: 'Successfull', data: data})
    })
    .catch((err) => {
        res.status(400).json({status: 'Fail', data: err})
    })
}

// Read Product
exports.ReadProduct = (req, res) => {
    // const Query = {}
    // const Projection = {_id: 0, ProductName: 1, ProductCode: 1, Img: 1, UnitPrice: 1, Qty: 1, TotalPrice: 1}

    ProductModel.find()
    .then((data) => {
        res.status(200).json({status: 'Successfull', data: data})
    })
    .catch((err) => {
        res.status(400).json({status: 'Fail', data: err})
    })
}

// Read Product By ID
exports.ReadProductByID = (req, res) => {
    const id = req.params.id
    const Query = {_id: id}
    // const Projection = {_id: 0, ProductName: 1, ProductCode: 1, Img: 1, UnitPrice: 1, Qty: 1, TotalPrice: 1}

    ProductModel.find(Query)
    .then((data) => {
        res.status(200).json({status: 'Successfull', data: data})
    })
    .catch((err) => {
        res.status(400).json({status: 'Fail', data: err})
    })
}

// Update Product 
exports.UpdateProduct = (req, res) => {
    const id = req.params.id
    const Query = {_id: id}
    const reqBody = req.body

    ProductModel.updateOne(Query, reqBody)
    .then((data) => {
        res.status(200).json({status: 'Successfull', data: data})
    })
    .catch((err) => {
        res.status(400).json({status: 'Fail', data: err})
    })
}

// Delete Product 
exports.DeleteProduct = (req, res) => {
    const id = req.params.id
    const Query = {_id: id}

    ProductModel.deleteOne(Query)
    .then((data) => {
        res.status(200).json({status: 'Successfull', data:data})
    })
    .catch((err) => {
        res.status(400).json({status: 'Fail', data: err})
    })
}

