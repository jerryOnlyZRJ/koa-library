const Router = require('koa-router')
const BookModel = require('../models/Book')

const router = new Router()
const bookModel = new BookModel()

// 配置与models配合的数据路由
router.post('/create', async (ctx, next) => {
    ctx.body = await indexModel.actionIndex()
})

module.exports = router