const Router = require('./router')
const ranHandler = require('./ran')
const echoHandler = require('./echo')
const indexHandler = require('./html')
async function handleRequest(request) {
    const r = new Router()
    r.get('.*/ran', ranHandler)
    r.get('.*/echo', echoHandler)
    // r.get('/', () => new Response('Hello Human!'))
    r.get('/', indexHandler)
    return await r.route(request)
}
module.exports = handleRequest
