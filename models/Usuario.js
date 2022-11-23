const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    nombre: {type: String, required: true},
    edad: {type: Number, required: true},
    nacimiento: {type: Date, required: true},
    foto: {type: String, required: true},
    mail: {type: String, required: true},
    contraseña: {type: String, required: true},
    hobbies: [{type: String}],
    comidas: [{type: mongoose.Types.ObjectId, ref: 'comidas'}],
    verificado: {type: Boolean},
    online: {type: Boolean},
    codigo: {type: String, required: true}
})

const Usuario = mongoose.model('usuarios',schema)
module.exports = Usuario