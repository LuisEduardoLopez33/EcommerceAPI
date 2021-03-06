const express = require('express');
const router = express.Router();
const customer = require('../controllers/customers')

router.get('/', function (req, res){
    res.send('Estas entrando en la Parte de Users')
})
router.get('/validateCustomer/:mail', customer.validateCustomer);
router.post('/signUp', customer.singUp);
router.post('/logIn', customer.logIn);
router.get('/getCustomers', customer.getAllCust);

module.exports = router;