const router = require('express').Router()
const schema = require('../config/schemas/usuario')
const validator = require('../middlewares/validator')
const { accountExists } = require('../middlewares/accountExistsSignUp')
const { registrar } = require('../controllers/usuario')

//primero valido con joi
//luego verifico si la cuenta existe
//y si todo va bien, creo el usuario
router.post('/',validator(schema),accountExists,registrar)

module.exports = router