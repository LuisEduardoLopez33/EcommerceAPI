const express = require('express');
const order = require('../controllers/orders')
const router = express.Router();

router.get('/', function (req, res){
    res.send('Estas entrando en la Parte de Orders')
})
router.post('/add');
router.post('/update');
router.get('/consult');
router.post('/delete');

router.post('/addOrder', order.addOrder);
router.get('/getOrderByCusID/:customerID', order.getOrderByCusID);


module.exports = router;