'use strict'

let mongoose = require('mongoose')
let Schema = mongoose.Schema

let VideoGameSchema = Schema({
    title: String,
    averageScore: Number,
    departureDate: Date,
    purchaseDate: Date,
    physical: Boolean,
    box: Boolean,
    manual: Boolean,
    digital: Boolean,
    image: String,
    genre: { type: Schema.ObjectId, ref: 'Genre' }
})

module.exports = mongoose.model("VideoGame", VideoGameSchema)
