const Usuario = require('../models/Usuario')

const controller = {

    registrar: async(req,res,next) => {
        let { name,photo,email,pass,role } = req.body
        pass = hashSync(pass, 10)
        let logged = false
        let verified = false
        const code = randomBytes(10).toString('hex')
        try {
            await accountVerificationEmail(email, code)
            await Usuario.create({ name,photo,email,pass,role,logged,verified,code })
            return userSignedUpResponse(req,res)
        } catch (error) {
            next(error)
        }
    },

    verificar: async(req,res,next) => {
        const { codigo } = req.params
        try {
            let one = await Usuario.findOneAndUpdate({ codigo },{ verificado: true },{ new: true })
            if (one) {
                return res.redirect(AFTER_VERIFICATION_URL)
            }
            return userNotFoundResponse(req,res)
        } catch(error) {
            next(error)
        }
    },

    ingresar: async(req,res,next) => {
        const { contraseña } = req.body
        const { user } = req
        //esto viene del middleware (no de passport!)
        try {
            const verificarContraseña = compareSync(contraseña,user.contraseña)
            if (verificarContraseña) {
                await user.update({ online: true }).exec()
                const token = jwt.sign(
                    { nombre: user.nombre, foto: user.foto, online: user.online },
                    process.env.KEY_JWT,
                    { expiresIn: 60*60*24 }
                )
                return res.status(200).json({
                    //sacar datos sensibles de user
                    response: { user,token },
                    success: true,
                    message: 'Welcome ' + user.name + '!',
                })
            }
            return invalidCredentialsResponse(req,res)
        } catch(error) {
            next(error)
        }
    },

    ingresarConToken: async(req,res,next) => {
        let { user } = req
        try {
            return res.json({
                //sacar datos sensibles de user en passport
                response: { user },
                success: true,
                message: `Welcome ${user.name}`
            })
        } catch(error) {
            next(error)
        }
    },

    salir: async(req,res,next) => {
        const { mail } = req.user
        try {
            await Usuario.findOneAndUpdate({ mail }, { online: false })
            return userSignedOutResponse(req,res)
        } catch(error) {
            next(error)
        }
    }

}

module.exports = controller