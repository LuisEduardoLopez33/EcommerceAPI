const express = require('express');
const cart = require('../controllers/cart')
const router = express.Router();


router.get('/', function (req, res){
    res.send('Estas entrando en la Parte de Cars')
})
router.post('/add');
router.get('/consult');
router.post('/delete');
router.post('/update');

router.post('/addCart', cart.addCart);
router.get('/getCartByCusID/:customerID', cart.GetCartByCusID);
router.get('/delByCartID/:cartID', cart.delByCartID);
router.get('/delByCustomerID/:customerID', cart.delByCustomerID);
router.put('/updCartByCartID/:id', cart.updCartByCartID);

module.exports = router;