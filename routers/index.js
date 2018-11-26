const Router = require('koa-router')
const router = new Router()
const indexModel = require('../models/index')

//配置根路由
router.get('/', async(ctx, next) => {
    // ctx.router available
    ctx.body = await ctx.render('index', {
    	name: 'Jerry',
    	data: 'Welcome to koa'
    })
});

//配置拓展路由
router.get('/a/b', async(ctx, next) => {
	ctx.body = 'Hello! This is a/b'
})

//配置与models配合的数据路由
router.get('/data', async(ctx, next) => {
	ctx.body = await indexModel.getData()
})

module.exports = router