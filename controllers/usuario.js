const Usuario = require('../models/Usuario')

const controller = {

    create: async(req,res,next) => { //método para crear un USUARIO
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
        let order = {}
        //let { query } = req //sacando la propiedad query del objeto req
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
    }

}

module.exports = controller