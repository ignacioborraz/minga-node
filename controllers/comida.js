const Comida = require('../models/Comida')

const controller = {

    create: async(req,res) => {
        try {
            let nuevo = await Comida.create(req.body)
            res.status(201).json({
                id: nuevo._id,
                success: true,
                message: "la comida se creó satisfactoriamente"
            })
        } catch(error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
    
    read: async(req,res) => {
        try {
            let todos = await Comida.find()
            if (todos) {
                res.status(200).json({
                    response: todos,
                    success: true,
                    message: "se obtuvieron comidas"
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "no hay comidas"
                })
            }            
        } catch {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }        
    },

    one: async(req,res) => {
        let { id } = req.params
        try {
            let todos = await Comida.find({ _id: id })
            if (todos) {
                res.status(200).json({
                    response: todos,
                    success: true,
                    message: "se obtuvo una comida"
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "no hay comidas"
                })
            }            
        } catch {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }        
    },
    
    update: async(req,res) => {
        let { id } = req.params
        try {
            let uno = await Comida.findOneAndUpdate({ _id: id }, req.body,{ new: true })
            if (uno) {
                res.status(200).json({
                    success: true,
                    message: "se modificó la comida"
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "no hay comidas que coincidan"
                })
            }
        } catch {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
    
    destroy: async(req,res) => {
        let { id } = req.params
        try {
            let uno = await Comida.findOneAndDelete({ _id: id })
            if (uno) {
                res.status(200).json({
                    success: true,
                    message: "se eliminó la comida"
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "no hay comidas que coincidan"
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