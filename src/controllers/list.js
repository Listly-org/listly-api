const { Sequelize } = require('sequelize')
const { listValidation } = require('../common/validations')
const list = require('../models/list')
const listItem = require('../models/listItem')

// Forgive me Lord for what I've done here
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

        const lists_with_all = await list.findAll({ 
            where: { group_id },
            attributes: {
                include: [[ Sequelize.fn('COUNT', Sequelize.col('listItems.id')), 'items_count' ]]
            },
            include: [{ 
                model: listItem, 
                attributes: [], 
                where: { completed: true } 
            }],
            group: ['list.id']
        })

        const lists_with_completed = await list.findAll({ 
            where: { group_id },
            attributes: {
                include: [[ Sequelize.fn('COUNT', Sequelize.col('listItems.id')), 'completed_items_count' ]]
            },
            include: [{ 
                model: listItem, 
                attributes: []
            }],
            group: ['list.id']
        })

        const lists = lists_with_all.map((list, index) => ({
            ...list.dataValues,
            items_count: parseInt(list.dataValues.items_count),
            completed_items_count: parseInt(lists_with_completed[index].dataValues.completed_items_count)
        }))

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
