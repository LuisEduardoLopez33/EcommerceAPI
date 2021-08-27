const express = require('express');
const router = express.Router();
const user = require('../controllers/users')

router.get('/', function (req, res){
    res.send('Estas entrando en la Parte de Users')
})
router.get('/validateUser/:nameUser', user.validateUser);
router.post('/singUp', user.singUp);
router.post('/logIn', user.logIn)

module.exports = router;