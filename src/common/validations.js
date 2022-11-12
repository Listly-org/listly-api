const yup = require('yup')
const {
    general: generalMsg
} = require('./messages')

const userValidation = yup.object({
    name: yup.string(generalMsg.invalidType)
        .required(generalMsg.required),
    email: yup.string(generalMsg.invalidType)
        .required(generalMsg.required)
        .email(generalMsg.email),
    password: yup.string(generalMsg.invalidType)
        .required(generalMsg.required),
})

const userLoginValidation = yup.object({
    email: yup.string(generalMsg.invalidType)
        .required(generalMsg.required)
        .email(generalMsg.email),
    password: yup.string(generalMsg.invalidType)
        .required(generalMsg.required)
})

const userJoinGroupValidation = yup.object({
    group_id: yup.number(generalMsg.invalidType)
        .required(generalMsg.required)
})

const groupValidation = yup.object({
    name: yup.string(generalMsg.invalidType)
        .required(generalMsg.required)
})

const listValidation = yup.object({
    type: yup.string(generalMsg.invalidType)
        .required(generalMsg.required),
    name: yup.string(generalMsg.invalidType)
        .required(generalMsg.required),
    value: yup.number(generalMsg.invalidType)
})

const listItemValidation = yup.object({
    name: yup.string(generalMsg.invalidType)
        .required(generalMsg.required),
    list_id: yup.number(generalMsg.invalidType)
        .required(generalMsg.required)
})

module.exports = {
    userValidation,
    userLoginValidation,
    userJoinGroupValidation,
    groupValidation,
    listValidation,
    listItemValidation
}
