const koa = require('koa')
const app = new koa()
const path = require('path')
const static = require('koa-static')
const router = require('./routers/index')
const render = require('koa-swig')
const co = require('co')

//配置静态资源
app.use(static(path.join(__dirname, 'public')))

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