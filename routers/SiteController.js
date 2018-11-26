const Router = require('koa-router')
const BookModel = require('../models/Book')
const BookController = require("./BookController")

const router = new Router()
// 串联BookController api子路由
router.use('/api', BookController.routes(), BookController.allowedMethods());
const bookModel = new BookModel()

//配置根路由
router.get('/', async(ctx, next) => {
    // ctx.router available
    ctx.body = await ctx.render('index', {
    	data: await bookModel.actionIndex()
    })
});

//配置拓展路由
router.get('/view', async(ctx, next) => {
	ctx.body = await ctx.render('view', {
    	data: await bookModel.actionView(ctx.query.id)
    })
})

//配置与models配合的数据路由
router.get('/update', async(ctx, next) => {
	ctx.body = await ctx.render('update', {
    	data: await bookModel.actionView(ctx.query.id)
    })
})

module.exports = router