const jwt = require('jsonwebtoken')

// JWT for creating a safe token
const createJWT = ({payload}) =>{
    const token = jwt.sign(payload, process.env.JWT_HIDDEN,{
        expiresIn: process.env.JWT_SESSION
    })
    return token;
}

const isTokenValid = ({token}) =>  {
    jwt.verify(token, process.env.JWT_HIDDEN)
}

module.exports={
    createJWT, isTokenValid
}