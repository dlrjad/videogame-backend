'use strict'

let mongoose = require('mongoose')
let Schema = mongoose.Schema

let GenreSchema = Schema({
    name: String,
    type: String
})

module.exports = mongoose.exports("Genre", GenreSchema)
