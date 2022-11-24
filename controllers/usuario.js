const Usuario = require('../models/Usuario')
const bcryptjs = require('bcryptjs')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const accountVerificationEmail = require('./accountVerificationEmail')
const {
    userSignedUpResponse, userNotFoundResponse, invalidCredentialsResponse, userSignedOutResponse
} = require('../config/responses')

const controlador = {

    registrar: async (req, res, next) => {
        let {
            nombre,edad,nacimiento,foto,mail,contraseña,hobbies,comidas
        } = req.body //desestructuro
         //defino propiedades "extras" (que requiere el modelo)
        let verificado = false
        let online = false
        let codigo = crypto.randomBytes(10).toString('hex') //defino el codigo de verificacion
        contraseña = bcryptjs.hashSync(contraseña, 10) //encripto o hasheo la contraseña
        //console.log(contraseña)
        try {
            await Usuario.create({
                nombre,edad,nacimiento,foto,mail,contraseña,hobbies,comidas,verificado,online,codigo
            }) //crea el usuario
            await accountVerificationEmail(mail, codigo) //envío mail de verificación (con transportador)
            return userSignedUpResponse(req, res) //respuesta
        } catch (error) {
            next(error) //respuesta del catch
        }
    },

    verificar: async (req, res, next) => {
        const { code } = req.params //desestructuro
        try {
            let user = await Usuario.findOneAndUpdate( //busco y actualizo
                { codigo: code }, //parametro de busqueda
                { verificado: true }, //parametro a modificar
                { new: true } //especificacion que reemplace el documento de origen
            )
            if (user) {
                //console.log(user)
                return res.redirect('https://www.google.com/')
                //deberia redigir a una pagina de bienvenida o home
                //puede retornar un json y manejar la redireccion en el front
            }
            return userNotFoundResponse(req, res) //respuesta
        } catch (error) {
            next(error) //respuesta del catch
        }
    },

    ingresar: async (req, res, next) => {
        let { contraseña } = req.body //desestructuro
        let { user } = req //desestructuro
        try {
            const verificarContraseña = bcryptjs.compareSync(contraseña, user.contraseña) //comparo contraseña
            if(verificarContraseña) {
                await Usuario.findOneAndUpdate( //busco y actualizo
                    { mail: user.mail }, //parametro de busqueda
                    { online: true }, //parametro a modificar
                    { new: true } //especificacion que reemplace el documento de origen
                )
                let token = jwt.sign( //creo la firma de jwt
                    { id: user.id }, //parametro a convertir en token
                    process.env.KEY_JWT, //parámetro secreto, necesario para la conversion
                    { expiresIn: 60*60*24 } //tiempo de expiracion en segundos
                )
                //console.log(token)
                user = { //protejo mas datos sensibles
                    nombre: user.nombre,
                    mail: user.mail,
                    foto: user.foto
                }
                return res.status(200).json({ //respuesta
                    response: { user,token },
                    success: true,
                    message: 'Welcome ' + user.nombre
                })
            }
            return invalidCredentialsResponse(req, res) //respuesta
        } catch (error) {
            next(error) //respuesta del catch
        }
    },

    ingresarConToken: async (req, res, next) => {
        let { user } = req //desestructuro
        console.log(user)
        try {
            return res.json({ //respuesta
                response: { user },
                success: true,
                message: 'Welcome ' + user.nombre
            })
        } catch (error) {
            next(error) //respuesta del catch
        }
    },

    salir: async (req, res, next) => {
        const { mail } = req.user //desestructuro
        try {
            //si tiene éxito debe cambiar online de true a false
            await Usuario.findOneAndUpdate(
                { mail }, //parametro de busqueda
                { online: false }, //parametro a modificar
                { new: true } //especificacion que reemplace el documento de origen

            )
            return userSignedOutResponse(req,res) //respuesta
        } catch (error) {
            next(error) //respuesta del catch
        }
    },

    read: async(req,res,next) => {
        let query = {}
        let order = { nombre: 'asc'}
        if (req.query.nombre) {
            query.nombre = new RegExp(req.query.nombre, 'i')
        }
        if (req.query.order) {
            order.nombre = req.query.order
        }
        try {
            let todos = await Usuario.find(query)
                .sort(order)
                .populate({
                    path: 'comidas',
                    populate: 'ingredientes'
                })
            if (todos) {
                res.status(200).json({
                    response: todos,
                    success: true,
                    message: "se obtuvieron usuarios"
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "no hay usuarios"
                })
            }            
        } catch(error) {
            next(error)
        }        
    }

}

module.exports = controlador