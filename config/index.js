const path = require('path')

module.exports = {
  api: 'http://192.168.64.2/yiiapi',
  staticResPath: path.join(__dirname, '../public'),
  viewPath: path.join(__dirname, '../views'),
  port: process.env.NODE_ENV === 'development' ? 3000 : 80
}
