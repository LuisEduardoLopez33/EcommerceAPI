const express = require('express');
const router = express.Router();

router.post('/add');
router.post('/update');
router.get('/consult');
router.post('/delete')


module.exports = router;