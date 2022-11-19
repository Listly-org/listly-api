const userController = require('../controllers/user')
const groupController = require('../controllers/group')
const listController = require('../controllers/list')
const listItemController = require('../controllers/listItem')

module.exports = {
    public: [
        {
            url: '/user',
            method: 'POST',
            controller: userController.create
        },
        {
            url: '/login',
            method: 'POST',
            controller: userController.login
        }
    ],
    private: [
        {
            url: '/user/join-group',
            method: 'PUT',
            controller: userController.joinGroup
        },
        {
            url: '/group',
            method: 'POST',
            controller: groupController.create
        },
        {
            url: '/group',
            method: 'GET',
            controller: groupController.getAll
        },
        {
            url: '/list',
            method: 'GET',
            controller: listController.getAll
        },
        {
            url: '/list/:id',
            method: 'GET',
            controller: listController.get
        },
        {
            url: '/list',
            method: 'POST',
            controller: listController.create
        },
        {
            url: '/list/:id',
            method: 'PUT',
            controller: listController.update
        },
        {
            url: '/list/:id',
            method: 'DELETE',
            controller: listController.exclude
        },
        {
            url: '/list-item',
            method: 'POST',
            controller: listItemController.create
        },
        {
            url: '/list-item/:id',
            method: 'PUT',
            controller: listItemController.update
        },
        {
            url: '/list-item/:id',
            method: 'DELETE',
            controller: listItemController.exclude
        },
    ]
}
