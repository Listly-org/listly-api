const Sequelize = require('sequelize')
const group = require('./group')
const user = require('./user')
const list = require('./list')
const listItem = require('./listItem')

const databaseConfig = require('../config/database')[process.env.NODE_ENV || 'development']

const models = [
    group,
    user,
    list,
    listItem
]

class Database {
    constructor() {
        this.start()
    }

    start() {
        this.connection = new Sequelize(databaseConfig)
        models
            .map(model => model.init(this.connection))
            .map(model => (
                model.associate && model.associate(this.connection.models)
            ))
    }
}

module.exports = new Database()
