const User = require('../models/User')

const controller = {
    
    create: async(requerimiento,respuesta) => { //método para crear un documento USUARIO
        try {
            let new_user = await User.create(requerimiento.body)
            respuesta.status(201).json({
                id: new_user._id,
                success: true,
                message: "el usuario se creó satisfactoriamente"
            })
        } catch(error) {
            respuesta.status(400).json({
                success: false,
                message: error.message
            })
        }
    },

    read: async(req,res) => { //método para leer/obtener todos los USUARIO
        let query = {} //objeto que va a contener las consultas
        let order = {} //objeto que va a contener el orden (asc/desc) de los datos
        console.log(req.query) //vemos en consola como llegan lan consultas
        //voy construyendo un objeto u otro según corresponda
        if (req.query.comidas) {
            query = { comidas: req.query.comidas }
        }
        if (req.query.hobbies) {
            query = {
                ...query,
                hobbies: req.query.hobbies
            }
        }
        if (req.query.edad) {
            query = {
                ...query,
                edad: req.query.edad
            }
        }
        if (req.query.order) {
            order = { nombre: req.query.order }
        }
        //en la petición agrego un signo ? para poder enviar una query
        //en la petición agrego un signo & para poder concatenar queries
        try {
            let todos = await User.find(query).sort(order)
            res.status(200).json({
                response: todos,
                success: true,
                message: "se encontraron usuarios"
            })
        } catch(error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },

    one: async(req,res) => { //método para leer/obtener un USUARIO
        let { id } = req.params //saco la propiedad id del objeto params
        //para buscar un usuario con ese id
        try {
            let uno = await User.findOneAndUpdate({ _id: id }, req.body, { new: true })
            if (uno) {
                res.status(200).json({
                    response: uno,
                    success: true,
                    message: "el usuario se encontró"
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "el usuario no se encontró"
                })
            }
        } catch(error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },

    update: async(req,res) => { //método para actualizar un USUARIO
        let { id } = req.params //saco la propiedad id del objeto params
        //para buscar un usuario con ese id
        //y poder modificarlo
        try {
            let uno = await User.findOneAndUpdate({ _id: id }, req.body, { new: true })
            //el metodo necesita 3 cosas:
                //dato que tiene que buscar (en este caso tiene que coincidir el id) (viene por params)
                //dato que quiero modificar (viene por body)
                //objeto que habilita el reemplazo del documento
                    //new: true habilita el reemplazo del usuario "viejo" por el usuario modificado
                    //new: false crea un nuevo usuario con los nuevos datos Y NO RE-ESCRIBE AL ANTERIOR
            if (uno) {
                res.status(200).json({
                    id: uno._id,
                    success: true,
                    message: "el usuario se modificó satisfactoriamente"
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "el usuario no se encontró"
                })
            }
        } catch(error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },

    destroy: async(req,res) => { //método para eliminar un USUARIO
        let { id } = req.params //saco la propiedad id del objeto params
        try {
            let uno = await User.findOneAndDelete({ _id: id})
            if (uno) {
                res.status(200).json({
                    id: uno._id,
                    success: true,
                    message: "el usuario se eliminó satisfactoriamente"
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "el usuario no se encontró"
                })
            }
        } catch(error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    }

}

module.exports = controller