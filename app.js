/**
 * @description node应用入口文件
 * @author Ranjay
 */
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const staticResource = require('koa-static')
const router = require('./routers/SiteController')
const render = require('koa-swig')
const co = require('co')
const errorHandler = require('./middlewares/errorhandler')
const config = require('./config')

const app = new Koa()
app.use(bodyParser())

errorHandler.error(app)

// 配置静态资源
app.use(staticResource(config.staticResPath))

// 配置模版引擎
app.context.render = co.wrap(
    render({
        root: config.viewPath,
        autoescape: true,
        cache: 'memory', // disable, set to false
        ext: 'html',
        writeBody: false
    })
)

app.use(router.routes(), router.allowedMethods())

app.listen(config.port, () => {
    console.log(`website is starting at port ${config.port}`)
})

module.exports = app
