const router = require('express').Router()
const schema = require('../config/schemas/usuario')
const validator = require('../middlewares/validator')
const accountExistsSignUp = require('../middlewares/accountExistsSignUp')
const accountExistsSignIn = require('../middlewares/accountExistsSignIn')
const accountHasBeenVerified = require('../middlewares/accountHasBeenVerified')
const mustSignIn = require('../middlewares/mustSignIn')
const { registrar,ingresar,verificar,ingresarConToken,salir,read } = require('../controllers/usuario')
const passport = require('../config/passport')

router.post('/signup', validator(schema), accountExistsSignUp, registrar)
router.get('/verify/:code', verificar)
router.post('/signin',accountExistsSignIn, accountHasBeenVerified, ingresar)
router.post('/token', passport.authenticate('jwt', { session:false }), mustSignIn, ingresarConToken)
router.put('/signout', passport.authenticate('jwt', { session:false }), salir)
router.get('/users',read)

module.exports = router