//requiero el método de enrrutamiento del modulo de express
let router = require('express').Router()

//requiero las rutas de cada modelo a controlar
let user = require('./user') //ubicacion de las rutas de user
let curso = require('./curso') //ubicacion de las rutas de curso

//le obligo al enrrutador principal que use "la palabrita /user" para poder controlar las rutas de user
router.use('/user',user)
//le obligo al enrrutador principal que use "la palabrita /curso" para poder controlar las rutas de curso
router.use('/curso',curso)

module.exports = router