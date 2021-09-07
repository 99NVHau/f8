var {google} = require("googleapis")
var drive = google.drive("v3")
var key = require("../../../private_key.json")
var path = require("path")
var fs = require("fs")
var jwToken = new google.auth.JWT(
    key.client_email,
    null,
    key.private_key,
    ["http://googleapis.com/auth/drive"],
    null
)

jwToken.authorize((authErr) => {
    if (authErr) {
      console.log("error : " + authErr);
      return;
    } else {
      console.log("Authorization accorded");
    }
  });
class LoginController{
    //[GET] // news
    index(req, res){
            res.render('login')
            
        }
    //[GET] // show
    data(req,res){
        console.log("token is:",req.body.token)
    }

    }

    
    module.exports = new LoginController;