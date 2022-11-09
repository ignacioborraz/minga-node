const router = require('express').Router()

const {
    create,read,one,update,destroy
} = require('../controllers/curso')

router
    .get('/',read)
    .post('/',create)

router
    .get('/:id',one)
    .put('/:id',update)
    .delete('/:id',destroy)

module.exports = router