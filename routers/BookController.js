const Router = require('koa-router')
const BookModel = require('../models/Book')

const router = new Router()
const bookModel = new BookModel()

router.get('/index', async (ctx, next) => {
    ctx.body = await bookModel.actionIndex()
})

router.get('/view', async (ctx, next) => {
    ctx.body = await bookModel.actionView(ctx.query.id)
})

router.post('/delete', async (ctx, next) => {
    ctx.body = await bookModel.actionDelete({
        id: ctx.query.id
    })
})

router.post('/create', async (ctx, next) => {
    ctx.body = await bookModel.actionCreate(ctx.request.body)
})

router.post('/update', async (ctx, next) => {
    ctx.body = await bookModel.actionUpdate(ctx.request.body)
})

module.exports = router