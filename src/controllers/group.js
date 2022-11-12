const { groupValidation } = require('../common/validations')
const group = require('../models/group')

const create = async (req, res, next) => {
    try {
        const { body } = req
        await groupValidation.validate(body)

        const newGroup = await group.create({
            name: body.name
        })

        return res.status(201).send({ ...newGroup })
    } catch(error) {
        next(error)
    }
}

const getAll = async (req, res, next) => {
    try {
        const groups = await group.findAll()
        return res.send({ groups })
    } catch(error) {
        return next(error)
    }
}

module.exports = {
    create,
    getAll
}
