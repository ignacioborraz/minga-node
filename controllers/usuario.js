const Usuario = require('../models/Usuario')

const controller = {

    create: async(req,res) => { //método para crear un USUARIO
        try {
            let nuevo = await Usuario.create(req.body)
            res.status(201).json({
                id: nuevo._id,
                success: true,
                message: "el usuario se creó satisfactoriamente"
            })
        } catch(error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
    
    read: async(req,res) => { //método para leer/obtener todos los USUARIOS
        let query = {}
        let order = {}
        //let { query } = req //sacando la propiedad query del objeto req
        console.log(req.query)
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
            res.status(400).json({
                success: false,
                message: error.message
            })
        }        
    },

    one: async(req,res) => { //método para leer/obtener un USUARIO
        let { id } = req.params
        try {
            let todos = await Usuario.find({ _id: id })
            if (todos) {
                res.status(200).json({
                    response: todos,
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
            res.status(400).json({
                success: false,
                message: error.message
            })
        }        
    },
    
    update: async(req,res) => { //método para actualizar un USUARIO
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
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
    
    destroy: async(req,res) => { //método para eliminar un USUARIO
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
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    }

}

module.exports = controller