const express = require('express');
const router = express.Router();

const product = require('../controllers/product')



router.post('/add', product.addProduct);
router.post('/update', product.updateProduct);
router.get('/consult', product.consultProduct);
router.post('/delete', product.deleteProduct);
router.get('/getProduct/:idProduct', product.consultProductDetails);
router.get('/getProducts', product.getProducts);
router.get('/getImg', product.consultProductImg);


module.exports = router;