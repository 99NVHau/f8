const express = require('express')
var router =express.Router();
const loginController = require('../app/controller/LoginController');

// var {google} = require("googleapis")
// var drive = google.drive("v3")
// var key = require("../../private_key.json")
// var path = require("path")
// var fs = require("fs")
// var jwToken = new google.auth.JWT(
//     key.client_email,
//     null,
//     key.private_key,
//     ["http://googleapis.com/auth/drive"],
//     null
// )

// jwToken.authorize((authErr) => {
//     if (authErr) {
//       console.log("error : " + authErr);
//       return;
//     } else {
//       console.log("Authorization accorded");
//     }
//   });

router.get('/',loginController.index);
router.post('/data',loginController.data);

module.exports = router;