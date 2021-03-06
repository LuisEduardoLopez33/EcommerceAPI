const express = require('express');
const router = express.Router();
const category = require('../controllers/category');


router.get('/',(req, res) => {

    res.send('CATEGORIAS!!!!');

})

router.get('/getCategories', category.getAllCategories);
router.get('/getCategory/:idCategory', category.consultCategories);
router.post('/addCategory', category.insertCategory);
router.put('/updateCategory/:id', category.updateCategory);
router.delete('/deleteCategory/:id', category.deleteCategory);



module.exports = router;