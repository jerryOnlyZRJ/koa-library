const log4js = require('log4js') 
const path = require("path")

log4js.configure({
	appenders: {
		cheese: {
			type: 'file',
			filename: path.join(__dirname, '../logs/jwslog.log')
		}
	},
	categories: {
		default: {
			appenders: ['cheese'],
			level: 'error'
		}
	}
})

module.exports = log4js