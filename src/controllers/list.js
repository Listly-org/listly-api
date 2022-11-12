const { listValidation } = require('../common/validations')
const list = require('../models/list')
const listItem = require('../models/listItem')

const getAll = async (req, res, next) => {
    try {
        const { user: { group_id } } = req

        if(!group_id) {
            return next({
                message: 'user.errors.groupNotFound',
                path: 'group_id',
                status: 400
            })
        }

        const lists = await list.findAll({ where: { group_id } })

        return res.send({ lists })
    } catch(error) {
        return next(error)
    }
}

const get = async (req, res, next) => {
    try {
        const { params: { id } } = req

        const listResponse = await list.findOne({
            where: { id },
            include: [{ model: listItem }]
        })

        return res.send({ ...listResponse.dataValues })
    } catch(error) {
        return next(error)
    }
}

const create = async (req, res, next) => {
    try {
        const { body, user: { group_id } } = req
        await listValidation.validate(body)

        if(!group_id) {
            return next({
                message: 'user.errors.groupNotFound',
                path: 'group_id',
                status: 400
            })
        }

        const newList = await list.create({ ...body, group_id })

        return res.status(201).send({ ...newList.dataValues })
    } catch(error) {
        return next(error)
    }
}

const exclude = async(req, res, next) => {
    try {
        const { params: { id } } = req

        const listResponse = await list.findOne({ where: { id } })

        await listResponse.destroy()

        return res.sendStatus(204)
    } catch (error) {
        return next(error)
    }
}

module.exports  = {
    getAll,
    get,
    create,
    exclude
}
