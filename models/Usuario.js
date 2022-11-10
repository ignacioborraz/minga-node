const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    nombre: {type: String, required: true},
    edad: {type: Number, required: true},
    nacimiento: {type: Date, required: true},
    foto: {type: String, required: true},
    mail: {type: String, required: true},
    comidas: [{type: String, required: true}],
    hobbies: [{type: String, required: true}]
})

const Usuario = mongoose.model('usuarios',schema)
module.exports = Usuario