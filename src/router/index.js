const newsRouter = require('./news.router')
const siteRouter = require('./site.router')
const loginRouter = require('./login.router')
function route(app){
    
    app.use('/news',newsRouter)
    app.use('/login',loginRouter)
    app.use('/',siteRouter)
}

module.exports = route;
