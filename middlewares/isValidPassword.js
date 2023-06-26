import bcryptjs from 'bcryptjs'

export default (req, res, next) => {
    const db_pass = req.user.password
    const form_pass = req.body.password
    if (bcryptjs.compareSync(form_pass,db_pass)) {
        delete req.user.password
        return next()
    }
    return res.status(400).json({
        response: null,
        messages: ['Invalid credentials!']
    })
}