const koa = require('koa')
const bodyParser = require("koa-bodyparser")
const path = require('path')
const staticResource = require('koa-static')
const router = require('./routers/SiteController')
const render = require('koa-swig')
const co = require('co')
const errorHandler = require("./middlewares/errorhandler")

const app = new koa()
app.use(bodyParser());

errorHandler.error(app)

//配置静态资源
app.use(staticResource(path.join(__dirname, 'public')))

//配置模版引擎
app.context.render = co.wrap(render({
    root: path.join(__dirname, 'views'),
    autoescape: true,
    cache: 'memory', // disable, set to false 
    ext: 'html',
    writeBody: false
}));

app.use(router.routes(), router.allowedMethods());

app.listen(3000, () => {
    console.log('website is starting at port 3000')
});

module.exports = app