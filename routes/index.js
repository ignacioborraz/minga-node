//el enrrutador principal va a requerir las rutas de cada modelo a controlar
//es decir las rutas que controlan cada método del modelo User
//y las rutas que controlan cada método del modelo Curso

//limpiar de app

const router = require('express').Router()

const usuarios = require('./usuarios')
const comidas = require('./comidas')
const ingredientes = require('./ingredientes')

router.use('/auth',usuarios)
router.use('/comidas',comidas)
router.use('/ingredientes',ingredientes)

module.exports = router