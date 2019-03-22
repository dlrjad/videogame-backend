'use strict'

let jwt = require('jwt-simple')
let moment = require('moment')
let secret = 'pass_secret_videogame'

exports.ensureAuth = function(req, res, next) {
    if(!req.headers.authorization) res.status(403).send({message: 'No tiene cabecera autenticación'})
    let token = req.headers.authorization.replace(/['"]+/g, '')
    try {
        var payload = jwt.decode(token, secret)
        if(payload.exp <= moment().unix()) res.status(401).send({message: 'El token ha expirado'})
    } catch(ex) {
        res.status(404).send({message: 'Token no valido'})
    }
    req.user = payload
    next()
}