const express = require('express');
const prodRev = require('../controllers/product_review')
const router = express.Router();

router.get('/', function (req, res){
    res.send('Estas entrando en la Parte de review de productos')
})

router.post('/add');
router.get('/consult');
router.post('/delete');
router.post('/update');


router.post('/addReview', prodRev.addNewReview);
router.get('/getRevs/:productID',prodRev.getReviews);

module.exports = router;