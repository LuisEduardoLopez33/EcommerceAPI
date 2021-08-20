const express = require('express');
const router = express.Router();
const product = require('../controllers/product')

router.post('/add', product.addProduct);
router.post('/update', product.updateProduct);
router.get('/consult', product.consultProduct)
router.post('/delete', product.deleteProduct)


module.exports = router;