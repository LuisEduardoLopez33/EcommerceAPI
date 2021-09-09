const database = require('../configMysql');
const express = require('express');
const multer = require('multer');
const path = require('path')
const fs = require('fs')

//const images = require('../models/imageDAO')

const router = express.Router();

const diskstorage = multer.diskStorage({
    destination: path.join(__dirname, '../images'),
    filename: (req, file, cb) => {
        cb(null, Date.now() + '_ecommerce_' + file.originalname);
    }
});

const fileUpload = multer({
    storage: diskstorage
}).single('image')

//
router.get('/', (req, res) => {
    res.send('Images!!!');
});

router.post('/insert', fileUpload, (req, res) => {
    
    const product_id = req.body.product_id
    const type = req.file.mimetype
    const name = req.file.originalname
    const data = fs.readFileSync(path.join(__dirname, '../images/' + req.file.filename))
    const size = req.file.size
    
    let sql = 'INSERT INTO product_image SET ?';

    database.query(sql,[{product_id, type, name, data, size}], (err, rows)=>{

        if(err){
            return res.status(500).send('server error');
        }else{
            res.send('Image Saved!!!');
        }
    })

});


router.delete('/delete/:id', (req, res) => {

    let sql = 'DELETE FROM product_image WHERE id = ?';

    database.query(sql, [req.params.id], (err, data) =>{
        if(err){
            return res.status(500).send('Server Error');
        }else{
            //fs.unlinkSync(path.join__dirname, '../dbimages/' + img.product_id + '-ecommerce.png')
            res.send('Image deleted!!!');
        }
    })
});

module.exports = router;
