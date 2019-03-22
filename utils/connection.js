'use strict'

const mongoose = require('mongoose')
const app = require('../app')
const port = require('../config/port')
const dbPath = require('../config/dbPath')

exports.connectToDb = function() {
    mongoose.connect(dbPath, { useNewUrlParser: true }, (err, db) => {
        if (err) throw err
        console.log("conexión establecida a la base de datos: " + db.name)
        app.listen(port, function() {
            console.log("Servidor localhost:" + port)
        })
        //db.close()
    })
}