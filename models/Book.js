const request = require('request-promise')
const {
    api
} = require('../config')

class IndexModel {
    actionIndex() {
        return request(`${api}/index.php`).then(data => JSON.parse(data))
    }
    actionView(id) {
        return request(`${api}/view.php?id=${id}`).then(data => JSON.parse(data))
    }
    actionCreate(body) {
        const options = {
            method: 'POST',
            uri: `${api}/create.php`,
            body: JSON.stringify(body),
            json: true // Automatically stringifies the body to JSON
        }
        return request(options).then(data => JSON.parse(data))
    }
    actionUpdate(body) {
        const options = {
            method: 'POST',
            uri: `${api}/update.php`,
            body: JSON.stringify(body)
        }
        return request(options).then(data => JSON.parse(data))
    }
    actionDelete(body) {
        const options = {
            method: 'POST',
            uri: `${api}/delete.php`,
            body: JSON.stringify(body)
        }
        return request(options).then(data => JSON.parse(data))
    }
}

module.exports = IndexModel