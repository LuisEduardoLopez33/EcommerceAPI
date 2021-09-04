const jwt = require ('jsonwebtoken')
const configurationServer = require('../ConfigServer')
const generateToken = (customer) => {
    let userToken ={
        id: customer.id,
        name: customer.name
    }
    return  jwt.sign(userToken,configurationServer.jwt.secret,{expiresIn: 60 * 60},)

}
module.exports = {
    generateToken
}