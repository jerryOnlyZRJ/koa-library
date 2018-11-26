const Router = require('koa-router')
const router = new Router()
const indexModel = require('../models/index')

//配置根路由
router.get('/', async(ctx, next) => {
    // ctx.router available
    ctx.body = await ctx.render('index', {
    	// name: 'Jerry',
    	// data: 'Welcome to koa'
    })
});

//配置拓展路由
router.get('/view', async(ctx, next) => {
	ctx.body = await ctx.render('view', {
    	// name: 'Jerry',
    	// data: 'Welcome to koa'
    })
})

//配置与models配合的数据路由
router.get('/update', async(ctx, next) => {
	ctx.body = await ctx.render('update', {
    	// name: 'Jerry',
    	// data: 'Welcome to koa'
    })
})

module.exports = router