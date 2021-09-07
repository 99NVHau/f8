const express = require('express')
const morgan = require('morgan')
var path = require('path');
const route = require('./router/index')
var handlebars = require('express-handlebars');
const app = express()
const port = 3000

//file static use
app.use(express.static(path.join(__dirname,'public')));



//htpp logger
app.use(morgan('combined'))
app.use(express.urlencoded({ extended: true}))
app.use(express.json())
//setup hadlebars
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, './resources/views'));
//xmlhttp, fetch, axios, asass





route(app)
//router
app.get('/',(req, res) => {
    res.render('home')
})




app.get('/search',(req, res) => {
    console.log(req.query.q)
    res.render('search')
})
app.post('/search',(req, res) => {
    console.log(req.body)
    res.render('search')
})


app.listen(port, function(error){
    if (error) {
        console.log("Something went wrong")
    }
    console.log("server is running port:  " + port)
})
