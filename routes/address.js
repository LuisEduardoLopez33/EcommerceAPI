const express = require('express');
const router = express.Router();
const address = require('../controllers/address');

router.get('/', (req, res) => {
    res.send('ADDRESS!!!')
});

router.get('/getAddresses', address.getAllAddresses);
router.get('/getAddressPerCustomerById', address.consultAddressPerCustomer);
router.post('/insertAddress', address.addNewAddress);
router.put('/updateAddress', address.updateAddress);
router.delete('/deleteAddress', address.deleteAddress);

module.exports = router;