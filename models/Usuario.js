const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    nombre: {type: String, required: true},
    edad: {type: Number, required: true},
    nacimiento: {type: Date, required: true},
    foto: {type: String, required: true},
    mail: {type: String, required: true},
    hobbies: [{type: String}],
    comidas: [{type: mongoose.Types.ObjectId, ref: 'comidas'}]
})

const Usuario = mongoose.model('usuarios',schema)
module.exports = Usuario