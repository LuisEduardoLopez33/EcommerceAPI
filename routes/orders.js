const express = require('express');
const order = require('../controllers/orders')
const jwt = require("jsonwebtoken");
const router = express.Router();

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

router.post('/holi', function (req, res){
    res.send({
        ok: true,
        message:'isok'
    })
})
router.post('/add');
router.post('/update');
router.get('/consult');
router.post('/delete');

router.post('/addOrder', order.addOrder);
router.get('/getOrderByCusID/:customerID', order.getOrderByCusID);
router.get('/getCartPastToOrder/:customerID' , order.getCartPasToOrder);


module.exports = router;