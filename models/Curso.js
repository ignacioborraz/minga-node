const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    nombre: {type: String, required: true},
    duracion: {type: String, required: true},
    alumno: [{type: mongoose.Types.ObjectId, ref: 'users', required: true}]
    //cambio el tipo de dato por mongoose.Types.ObjectId
    //mongoose.Types.ObjectId es un tipo especial de datos que sirve para referenciar los datos de bases noSQL
    //ademas debo agregar una propiedad ref, que hace referencia a la colección que quiero referenciar
})

const Curso = mongoose.model('cursos',schema)
module.exports = Curso