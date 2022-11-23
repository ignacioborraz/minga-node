const router = require('express').Router()
const schema = require('../config/schemas/usuario')
const validator = require('../middlewares/validator')
const accountExistsSignUp = require('../middlewares/accountExistsSignUp')
const accountExistsSignIn = require('../middlewares/accountExistsSignIn')
const accountHasBeenVerified = require('../middlewares/accountHasBeenVerified')
const mustSignIn = require('../middlewares/mustSignIn')
const { registrar,ingresar,verificar, ingresarConToken, salir } = require('../controllers/usuario')
const passport = require('../config/passport')

//primero valido con joi
//luego verifico si la cuenta existe
//y si todo va bien, creo el usuario
router.post('/signup',validator(schema),accountExistsSignUp,registrar)

//envio el codigo de verificacion por params
//el metodo verificar, cambiará la propiedad verificado de false a true
router.get('/verify/:code',verificar)
router.post('/signin',accountExistsSignIn,accountHasBeenVerified,ingresar)
router.post('/token', passport.authenticate('jwt', {session: false}), mustSignIn, ingresarConToken)
router.put('/signout', passport.authenticate('jwt', {session: false}), salir)
// session storage
//passport.authenticate('jwt', {session: false})
module.exports = router