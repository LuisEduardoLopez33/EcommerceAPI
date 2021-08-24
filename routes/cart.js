const express = require('express');
const router = express.Router();


router.get('/', function (req, res){
    res.send('Estas entrando en la Parte de Cars')
})
router.post('/add');
router.get('/consult');
router.post('/delete');
router.post('/update')

module.exports = router;