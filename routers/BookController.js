const Router = require('koa-router')
const IndexModel = require('../models/index')

const router = new Router()
const indexModel = new IndexModel()

//配置与models配合的数据路由
// router.get('/api/index', async (ctx, next) => {
//     ctx.body = await indexModel.actionIndex()
// })

module.exports = router