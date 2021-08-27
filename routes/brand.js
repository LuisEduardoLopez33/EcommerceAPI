const express = require('express');
const router = express.Router();
const brand = require('../controllers/brand');

router.get('/', (req, res) => {
    res.send('MARCAS!!!');
})

router.get('/getBrands', brand.getAllBrands);
router.get('/getBrands/:id', brand.consultBrandById);

router.post('/addBrand', brand.insertBrand);
router.put('/updateBrand/:id', brand.updateBrand);
router.delete('/deleteBrand/:id', brand.deleteBrand);


module.exports = router;