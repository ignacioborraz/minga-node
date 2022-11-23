const router = require('express').Router()
const schema = require('../config/schemas/usuario')
const validator = require('../middlewares/validator')
const accountExistsSignUp = require('../middlewares/accountExistsSignUp')
const { registrar,ingresar,verificar } = require('../controllers/usuario')

//primero valido con joi
//luego verifico si la cuenta existe
//y si todo va bien, creo el usuario
router.post('/signup',validator(schema),accountExistsSignUp,registrar)

//envio el codigo de verificacion por params
//el metodo verificar, cambiará la propiedad verificado de false a true
router.get('/verify/:code',verificar)
router.post('/signin',ingresar)

module.exports = router