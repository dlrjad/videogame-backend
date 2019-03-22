'use strict'

let mongoose = require('mongoose')
let Schema = mongoose.Schema

let ConsoleSchema = Schema({
    name: String,
    bits: Number,
    departureDate: Date,
    purchaseDate: Date,
    box: Boolean,
    purchaseGame: Number,
    soldUnits: Number,
    numberGame: Number,
    image: String
})

module.exports = mongoose.exports("Console", ConsoleSchema)
