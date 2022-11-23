const Usuario = require('../models/Usuario')
const bcryptjs = require('bcryptjs') //de esta libreria vamos a utilizar el método hashSync para encriptar la contraseña
const crypto = require('crypto')//de este modulo vamos a requerir el método randomBytes
const accountVerificationEmail = require('./accountVerificationEmail')
const { userSignedUpResponse } = require('../config/responses')

const controlador = {

    registrar: async(req,res,next) => {
        //método para que un usuario se registre
        //luego de pasar por todas las validaciones:
            //desestructura el cuerpo
            let { nombre,edad,nacimiento,foto,mail,contraseña,hobbies,comidas } = req.body
            //define las propiedades "extras" que necesite (online, codigo y verificado)
            let verificado = false
            let online = false
            let codigo = crypto.randomBytes(10).toString('hex')
            //encripto o hasheo la contraseña
            contraseña = bcryptjs.hashSync(contraseña,10)
            console.log(contraseña)     
        try {
            //crea el usuario
            await Usuario.create({ nombre,edad,nacimiento,foto,mail,contraseña,hobbies,comidas,verificado,online,codigo })
            //envía mail de verificación (con transportador)
            await accountVerificationEmail(mail,codigo)
            return userSignedUpResponse(req,res)
        } catch(error) {
            next(error)
        }
    },

    verificar: async(req,res,next) => {
        //método para que un usuario verifique su cuenta
        //requiere por params el código a verificar
        //busca un usuario que coincida el código
        //y cambia verificado de false a true
            //si tiene éxito debe redirigir a alguna página (home, welcome, login)
            //si no tiene éxito debe responder con el error
        try {

        } catch(error) {
            next(error)
        }
    },

    ingresar: async(req,res,next) => {
        //método para que un usuario inicie sesión
        //luego de pasar por todas las validaciones:
            //desestructura la contraseña y el objeto user que vienen en el req
            //compara las contraseñas
                //si tiene éxito debe generar y retornar un token y debe redirigir a alguna página (home, welcome)
                    //además debe cambiar online de false a true
                //si no tiene éxito debe responder con el error
        try {

        } catch(error) {
            next(error)
        }
    },

    ingresarConToken: async(req,res,next) => {
        //método para que un usuario que ya inicio sesión no la pierda al recargar
        //solo para usuarios registrados en nuestra app (social loguin se maneja en front)
        //luego de pasar por todas las validaciones:
            //debe responder con los datos del usuario
        try {

        } catch(error) {
            next(error)
        }
    },

    salir: async(req,res,next) => {
        //método para que un usuario cierre sesión (cambia online de true a false)
        //solo para usuarios registrados en nuestra app (social logout se maneja en front)
                //si tiene éxito debe debe cambiar online de true a false
                //si no tiene éxito debe responder con el error
        try {

        } catch(error) {
            next(error)
        }
    }

}

module.exports = controlador