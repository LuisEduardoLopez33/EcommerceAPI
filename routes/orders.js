const express = require('express');
const router = express.Router();

router.get('/', function (req, res){
    res.send('Estas entrando en la Parte de Orders')
})
router.post('/add');
router.post('/update');
router.get('/consult');
router.post('/delete')


module.exports = router;