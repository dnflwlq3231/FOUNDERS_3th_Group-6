const express = require('express');
const router = express.Router();
const config = require('../config');

router.get('/', async function(req, res, next) {
    res.render('index.ejs');
})

module.exports = router;