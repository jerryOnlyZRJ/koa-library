const request = require('request-promise')
const {
    host
} = require('../config')

class IndexModel {
    actionIndex() {
        return request(`${host}%2Findex`).then(data => JSON.parse(data))
    }
    actionView(id) {
        return request(`${host}%2Fview&id=${id}`).then(data => JSON.parse(data))
    }
    actionCreate() {
        const options = {
            method: 'POST',
            uri: `${host}%2Fcreate`,
            body: body,
            json: true // Automatically stringifies the body to JSON
        }
        return request(options).then(data => JSON.parse(data))
    }
    actionUpdate(id, body) {
        const options = {
            method: 'POST',
            uri: `${host}%2Fupdate&id=${id}`,
            body: body
        }
        return request(options).then(data => JSON.parse(data))
    }
    actionDelete(id) {
        const options = {
            method: 'POST',
            uri: `${host}%2Fdelete&id=${id}`,
            body: body
        }
        return request(options).then(data => JSON.parse(data))
    }
}

module.exports = IndexModel