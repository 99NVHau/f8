const express = require('express')
var router =express.Router();
const newsController = require('../app/controller/NewsController');

router.get('/',newsController.index);


module.exports = router;