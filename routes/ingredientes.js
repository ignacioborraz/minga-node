const router = require('express').Router()

const {
    create,read,one,update,destroy
} = require('../controllers/ingrediente')

router.route('/')
    .get(read)
    .post(create)

router.route('/:id')
    .get(one)
    .put(update)
    .delete(destroy)

module.exports = router