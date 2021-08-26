const productDao = require('../models/productDao')

const addProduct = (req, res) =>{
    const product = {
        name: req.body.name,
        model: req.body.model,
        brand_id: req.body.brand_id,
        category_id: req.body.category_id,
        description: req.body.description,
        price: req.body.price,
        stock: req.body.stock,
        size: req.body.size,
        color: req.body.color
    }

    productDao.addProduct(product, (data) =>{
        res.send({
            status: true,
            message: 'El producto se agrego correctamente'
        })
    }, err =>{
        res.send({
            status: false,
            message: 'El producto no se pudo agregar'
        })
    })
}

    const updateProduct = (req, res) =>{}

    const consultProduct = (req, res) =>{

    productDao.consultProduct((data) =>{
        if (data){
            res.send({
                status: true,
                message: 'Datos Obtenidos'
            })
        }else {
            res.send({
                status: false,
                message: 'No se pudo ontener los datos'
            })
        }
    })
}

    const deleteProduct = (req, res) =>{}

    const consultProductDetails = (req, res) => {
    productDao.productDetails(req.params.idProduct,data => {
        if (data != null) {
            res.send({
                status: true,
                data: data
            })
        }else{
            res.send({
                status: false,
                message: 'No se pudo ontener los datos'
            })
        }
    })}

const consultProductImg = (req, res) => {
    productDao.productImagen(req.params.idProduct,data => {
        if (data != null) {
            res.send({
                status: true,
                data: data
            })
        }else{
            res.send({
                status: false,
                message: 'No se pudo ontener los datos'
            })
        }
    })}

    const getProducts = (req, res) => {
        productDao.getAllProducts((data) => {
            if (data != null) {
                res.send({
                    status: true,
                    data: data
                })
            } else {
                res.send({
                    status: false,
                    message: 'Catálogo vacío'
                })
            }
        })
    }

    module.exports = {
        addProduct,
        updateProduct,
        consultProduct,
        deleteProduct,
        consultProductDetails,
        getProducts,
        consultProductImg
    }