//el primer paso de cualquier enrrutador "especifico"
//es requerir el metodo Router() del modulo de express
let router = require('express').Router()

//desestructuro el controlador de user para traerme los métodos que necesito enrrutar
let { create,read,update,destroy } = require('../controllers/user')

//utilizo el método route del enrrutador para agregar una palabrita extra a la ruta
//y concatenando todas las palabras por las que pasó el enrrutador voy a obtener la ruta total
//para poder controlar este método
router.post('/',create)
router.get('/',read)
router.put('/:id',update)
router.delete('/:id',destroy)

module.exports = router;
