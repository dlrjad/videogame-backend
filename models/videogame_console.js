'use strict'

let mongoose = require('mongoose')
let Schema = mongoose.Schema

let VideGameConsoleSchema = Schema({
    videogame: { type: Schema.ObjectId, ref: 'VideoGame' },
    console: { type: Schema.ObjectId, ref: 'Console' }
})

module.exports = mongoose.exports("VideoGameConsole", VideGameConsoleSchema)
