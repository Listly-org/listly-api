const { userValidation, userJoinGroupValidation, userLoginValidation } = require('../common/validations')
const user = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const create = async (req, res, next) => {
    try {
        const { body } = req
        await userValidation.validate(body)

        const userExists = await user.findOne({
            where: { email: body.email }
        })

        if(userExists) {
            return next({
                message: 'user.errors.alreadyExisting',
                path: 'email',
                status: 400
            })
        }

        const newUser = await user.create({
            name: body.name,
            email: body.email,
            password: body.password
        })

        const token = jwt.sign(
            { ...newUser.dataValues },
            process.env.APP_SECRET,
            { expiresIn: process.env.APP_SECRET_EXPIRES }
        )

        return res.status(201).send({
            user: newUser,
            token
        })
    } catch(error) {
        return next(error)
    }
}

const login = async (req, res, next) => {
    try {
        const { body } = req
        await userLoginValidation.validate(body)

        const userResponse = await user.findOne({
            where: { email: body.email }
        })

        if(!userResponse) {
            return next({
                message: 'user.errors.accountNotFound',
                path: 'email',
                status: 401
            })
        }

        if(await !bcrypt.compare(body.password, userResponse.password)) {
            return next({
                message: 'authentication.errors.passwordNotMatch',
                path: 'password',
                status: 401
            })
        }

        const token = jwt.sign(
            { ...userResponse.dataValues },
            process.env.APP_SECRET,
            { expiresIn: process.env.APP_SECRET_EXPIRES }
        )

        return res.status(201).send({
            user: userResponse,
            token
        })
    } catch(error) {
        return next(error)
    }
}

const joinGroup = async (req, res, next) => {
    try {
        const { body, user: reqUser } = req
        await userJoinGroupValidation.validate(body)

        const [, updatedUser] = await user.update(
            { group_id: body.group_id },
            { 
                where: { id: reqUser.id },
                individualHooks: true,
                returning: true
            }
        )

        const token = jwt.sign(
            { ...updatedUser[0].dataValues },
            process.env.APP_SECRET,
            { expiresIn: process.env.APP_SECRET_EXPIRES }
        )

        return res.send({
            user: updatedUser[0].dataValues,
            token
        })
    } catch(error) {
        return next(error)
    }
}

module.exports = {
    create,
    login,
    joinGroup
}
