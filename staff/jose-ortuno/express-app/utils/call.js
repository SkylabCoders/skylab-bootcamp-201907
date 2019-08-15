const fetch = require('node-fetch');
const validate = require('./validate')

module.exports = function (url, method = 'get', headers, body) {
    validate.string(url, 'url')
    validate.url(url, 'url')
    validate.string(method, 'method', true, ['get', 'post', 'put', 'patch', 'delete'])

    return fetch(url, {
        method,
        headers,
        body: JSON.stringify(body)
    })
        .then(res => res.json())
}