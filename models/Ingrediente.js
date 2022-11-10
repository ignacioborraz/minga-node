const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    nombre: {type: String, required: true},
    foto: {type: String, required: true}
})

const Ingrediente = mongoose.model('ingredientes',schema)
module.exports = Ingrediente