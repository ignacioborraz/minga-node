const Curso = require('../models/Curso')

const controller = {

    create: async(req,res) => { //método para crear un CURSO
        try {
            let nuevo = await Curso.create(req.body)
            res.status(201).json({
                id: nuevo._id,
                success: true,
                message: "el curso se creó satisfactoriamente"
            })
        } catch(error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
    
    read: async(req,res) => { //método para leer/obtener todos los CURSOS
        try {
            let todos = await Curso.find()
            if (todos) {
                res.status(200).json({
                    response: todos,
                    success: true,
                    message: "se obtuvieron cursos"
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "no hay cursos"
                })
            }            
        } catch {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }        
    },

    one: async(req,res) => { //método para leer/obtener un CURSO
        let { id } = req.params
        try {
            let todos = await Curso.find({ _id: id })
            if (todos) {
                res.status(200).json({
                    response: todos,
                    success: true,
                    message: "se obtuvieron cursos"
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "no hay cursos"
                })
            }            
        } catch {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }        
    },
    
    update: async(req,res) => { //método para actualizar un CURSO
        let { id } = req.params
        try {
            let uno = await Curso.findOneAndUpdate({ _id: id }, req.body,{ new: true })
            if (uno) {
                res.status(200).json({
                    success: true,
                    message: "se modificó el curso"
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "no hay cursos que coincidan"
                })
            }
        } catch {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
    
    destroy: async(req,res) => { //método para eliminar un CURSO
        let { id } = req.params
        try {
            let uno = await Curso.findOneAndDelete({ _id: id })
            if (uno) {
                res.status(200).json({
                    success: true,
                    message: "se eliminó el curso"
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "no hay cursos que coincidan"
                })
            }
        } catch {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    }

}

module.exports = controller