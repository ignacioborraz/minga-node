const Usuario = require('../models/Usuario')

const controller = {

    create: async(req,res,next) => { //método para crear un USUARIO
        req.body.disponible = false //agrego una prop al body (por defecto se crea como "no disponible")
        try {
            let nuevo = await Usuario.create(req.body)
            res.status(201).json({
                id: nuevo._id,
                success: true,
                message: "el usuario se creó satisfactoriamente"
            })
        } catch(error) {
            next(error)
        }
    },
    
    read: async(req,res,next) => { //método para leer/obtener todos los USUARIOS
        let query = {}
        let order = { nombre: 'asc'}
        if (req.query.nombre) {
            query.nombre = new RegExp(req.query.nombre, 'i')
        }
        if (req.query.order) {
            order.nombre = req.query.order
        }
        //en la petición agrego un signo de pregunta ? para poder enviar una query/consulta
        //a la base de datos
        try {
            let todos = await Usuario.find(query)
                .sort(order)
                .populate({ path: 'comidas', populate: 'ingredientes' })
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
    },

    one: async(req,res,next) => { //método para leer/obtener un USUARIO
        let { id } = req.params
        try {
            let uno = await Usuario.findOne({ _id: id })
                .populate({ path: 'comidas', select: 'nombre -_id' })
            if (uno) {
                res.status(200).json({
                    response: uno,
                    success: true,
                    message: "se obtuvo un usuario"
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "no existe el usuario"
                })
            }            
        } catch(error) {
            next(error)
        }        
    },
    
    update: async(req,res,next) => { //método para actualizar un USUARIO
        let { id } = req.params
        try {
            let uno = await Usuario.findOneAndUpdate({ _id: id }, req.body,{ new: true })
            if (uno) {
                res.status(200).json({
                    success: true,
                    message: "se modificó el usuario"
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "no hay usuarios que coincidan"
                })
            }
        } catch(error) {
            next(error)
        }
    },
    
    destroy: async(req,res,next) => { //método para eliminar un USUARIO
        let { id } = req.params
        try {
            let uno = await Usuario.findOneAndDelete({ _id: id })
            if (uno) {
                res.status(200).json({
                    success: true,
                    message: "se eliminó el usuario"
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "no hay usuarios que coincidan"
                })
            }
        } catch(error) {
            next(error)
        }
    },

    registrar: async(req,res,next) => {
        //método para que un usuario se registre
        //luego de pasar por todas las validaciones:
            //desestructura el cuerpo
            //hashea la contraseña con bcryptjs (npm i bcryptsjs)
            //define las propiedades "extras" que necesite (online, codigo y verificado)
            //crea el usuario
            //envía mail de verificación (con transportador)
            //retorna la respuesta correcta
        try {

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

module.exports = controller