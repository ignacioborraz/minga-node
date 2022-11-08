//los modelos de datos se escriben con primera letra en mayúsculas y en singular
//las colecciones son un conjunto de modelos y se escriben en minusculas y plural
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

//para definir un modelo es necesario:
//nombre de la coleccion
//schema de datos

const User = mongoose.model('users',schema)
module.exports = User