module.exports = {
    authentication: {
        errors: {
            tokenNotProvided: 'It is necessary to send the auth token for this request',
            invalidToken: 'Invalid token',
            passwordNotMatch: 'Incorrect password'
        }
    },
    general: {
        required: 'Required field',
        invalidType: 'Field with invalid type',
        email: 'Must be an valid email'
    },
    user: {
        errors: {
            accountNotFound: 'No account registered with the email provided',
            alreadyExisting: 'Email already in use',
            groupNotFound: 'Group not found'
        }
    }
}
