const { Router } = require('express')
const errorMiddleware = require('./middlewares/error')
const authMiddleware = require('./middlewares/auth')
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

router.use(authMiddleware)

private.forEach(route => {
    createRoute(route)
})

router.use(errorMiddleware)

module.exports = router
