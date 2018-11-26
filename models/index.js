const request = require('request-promise')
const cheerio = require('cheerio')

let indexModel = {
    getData: () => {
    	return request('http://www.baidu.com').then(data => {
    		const $ = cheerio.load(data)
    		return $('.mnav').text()
    	})
    }
}

module.exports = indexModel