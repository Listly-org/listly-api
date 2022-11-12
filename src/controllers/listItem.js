const { listItemValidation } = require('../common/validations')
const listItem = require('../models/listItem')

const create = async (req, res, next) => {
    try {
        const { body } = req
        await listItemValidation.validate(body)

        const newListItem = await listItem.create({ ...body })

        return res.status(201).send({ ...newListItem.dataValues })
    } catch(error) {
        return next(error)
    }
}

const exclude = async(req, res, next) => {
    try {
        const { params: { id } } = req

        const listResponse = await listItem.findOne({ where: { id } })

        await listResponse.destroy()

        return res.sendStatus(204)
    } catch (error) {
        return next(error)
    }
}

module.exports = {
    create,
    exclude
}
