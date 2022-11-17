const router = require('express').Router()
const schema = require('../config/schemas/usuario')
const validator = require('../middlewares/validator')

const {
    create,read,one,update,destroy
} = require('../controllers/usuario')

router.route('/')
    .get(read)
    .post(validator(schema),create)

router.route('/:id')
    .get(one)
    .put(update)
    .delete(destroy)

module.exports = router