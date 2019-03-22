'use strict'

let mongoose = require('mongoose')
let Schema = mongoose.Schema

let UserSchema = Schema({
    name: String,
    surname: String,
    email: String,
    password: String,
    role: { type: Schema.ObjectId, ref: 'Role' }
})

module.exports = mongoose.model('User', UserSchema)
