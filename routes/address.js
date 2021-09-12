const express = require('express');
const router = express.Router();
const address = require('../controllers/address');

const jwt = require("jsonwebtoken");
const configuration = require('../ConfigServer')

router.use('/',function(req, res, next) {
    var token = req.headers['authorization']
    if (!token) {
        res.status(401).send({
            ok: false,
            message: 'Toket inválido'
        })
    }

    token = token.replace('Bearer ', '')

    jwt.verify(token,configuration.jwt.secret,(err, user)=> {
        if (err) {
            return res.status(401).send({
                ok: false,
                message: 'Toket inválido'
            });
        } else {
            req.token = token
            next()
        }
    });
});



router.get('/', (req, res) => {
    res.send('ADDRESS!!!')
});


router.get('/getAddresses', address.getAllAddresses);
router.get('/getAddressPerCustomerById/:idCustomer', address.consultAddressPerCustomer);
router.post('/insertAddress', address.addNewAddress);
router.put('/updateAddress/:idAddress', address.updateAddress);
router.delete('/deleteAddress/:idAddress', address.deleteAddress);
router.get('/getJoinStateCity/:name', address.joinStateWithCity)


module.exports = router;