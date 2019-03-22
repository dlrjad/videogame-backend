'use strict'

let mongoose = require('mongoose')
let Schema = mongoose.Schema

let RoleSchema = Schema({
    name: String
})

module.exports = mongoose.model("Role", RoleSchema)