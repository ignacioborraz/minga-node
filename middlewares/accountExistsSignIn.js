const Usuario = require("../models/Usuario");
const { invalidCredentialsResponse } = require("../config/responses")

async function accountExistsSignIn(req, res, next) {
    const user = await Usuario.findOne({mail: req.body.mail})
    if (user) {
        req.user = { //inyecto al req la propiedad user con los datos que necesito
            id: user._id,
            nombre: user.nombre,
            mail: user.mail,
            foto: user.foto,
            contraseña: user.contraseña,
            verificado: user.verificado
        }
        //console.log(req.user)
        return next()
    }
    return invalidCredentialsResponse(req,res)
}

module.exports = accountExistsSignIn
