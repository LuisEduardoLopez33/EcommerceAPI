const express = require('express');
const router = express.Router();
const product = require('../controllers/product')

router.get('/', function (req, res){
    res.send('Estas entrando en la Parte de Product')
})
router.post('/add', product.addProduct);
router.post('/update', product.updateProduct);
router.get('/consult', product.consultProduct);
router.post('/delete', product.deleteProduct);
router.get('/getProduct/:idProduct', product.consultProductDetails);


module.exports = router;