const token = require('jsonwebtoken');
const configServer = require('../configServer')

const generateToken = (client) => {
    let token = {
        id: client.idclient,
        name: client.name,
        user: client.user
    }

    return token.sign(token, configServer.jwt.secret, {expiresIn: 60 * 60})
}

module.exports = {
    generateToken
}