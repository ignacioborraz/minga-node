const Usuario = require("../models/Usuario");
const { invalidCredentialsResponse } = require("../config/responses")

async function accountExistsSignIn(req, res, next) {
    const user = await Usuario.findOne({mail: req.body.mail})
    if (user) {
        req.user = user
        return next()
    }
    invalidCredentialsResponse(req,res)
}

module.exports = accountExistsSignIn
