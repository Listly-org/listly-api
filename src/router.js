const { Router } = require('express')
const { public, private } = require('./common/routes')

const router = new Router()

const createRoute = (route) => {
    switch(route.method) {
    case 'GET':
        router.get(route.url, route.controller)
        break
    case 'POST':
        router.post(route.url, route.controller)
        break
    case 'PUT':
        router.put(route.url, route.controller)
        break
    case 'DELETE':
        router.delete(route.url, route.controller)
        break
    }
}

public.forEach(route => {
    createRoute(route)
})

private.forEach(route => {
    createRoute(route)
})

module.exports = router
