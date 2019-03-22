'use strict'

const User = require('../models/user')
const bcrypt = require('bcrypt-nodejs')
const jwt = require('../services/jwt')

async function tests(req, res) {
    return await res.status(200).send({message: 'Probando controlador usuario'})
}

async function getUsers(req, res) {
    User.find({}, (err, data) => {
        if(err) res.status(500).send({message: 'Error al obter los usuarios'})
        else res.status(200).send({user: data})
    })
}

function getUserById(req, res) {
    let userId = req.params.userId
    User.findOne(userId, (err, data) => {
        if(err) res.status(500).send({message: 'Error al obter el usuario ' + userId})
        else res.status(200).send({user: data})
    })
}

function saveUser(req, res) {
    let user = new User()
    let params = req.body

    user.name = params.name
    user.surname = params.surname
    user.email = params.email
    user.role = params.role

    if (params.password) {
        bcrypt.hash(params.password, null, null, function(err, hash) {
            user.password = hash
            if (user.name != null && user.surname != null && user.email != null && user.role != null ) {
                user.save((err, userStored) => {
                    if (err) res.status(500).send({message: 'Error al guardar usuario'})
                    else {
                        if (!userStored) res.status(404).send({message: 'No se ha registrado el usuario'})
                        else res.status(200).send({user: userStored}) 
                    }
                })
            } else res.status(200).send({message: 'Debe rellenar todos los campos'})
        })
    } else res.status(200).send({message: 'Debe indicar la contraseña'})
}

function loginUser(req, res) {
    let params = req.body
    let email = params.email
    let password = params.password

    User.findOne({email: email.toLowerCase()}, (err, user) => {
        if (err) res.status(500).send({message: 'Error en la petición'})
        else {
            if(!user) res.status(404).send({message: 'No existe el usuario'})
            else {
                bcrypt.compare(password, user.password, function(err, check) {
                    if (check) {
                        if (params.gethash) {
                            res.status(200).send({
                                token: jwt.createToken(user)
                            })
                        } else res.status(200).send({user})
                    } else res.status(404).send({message: 'Email y/o password incorrecto'})
                })
            }
        }
    })
}

function updateUser(req, res) {
    let userId = req.params.userId
    let update = req.body

    User.findOneAndUpdate(userId, update, (err, userUpdated) => {
        if(err) res.status(500).send({message: 'Error al actualizar el usuario'})
        else {
            if(!userUpdated) res.status(404).send({message: 'No se ha podido actualizar el usuario'})
            else res.status(200).send({user: userUpdated})
        }
    })
}

module.exports = {
    tests,
    getUsers,
    getUserById,
    saveUser,
    loginUser,
    updateUser
}