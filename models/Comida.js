const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    nombre: {type: String, required: true},
    receta: {type: String, required: true},
    ingredientes: [{type: mongoose.Types.ObjectId, ref: 'ingredientes', required: true}]
})

const Comida = mongoose.model('comidas',schema)
module.exports = Comida