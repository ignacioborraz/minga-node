const Comida = require('../models/Comida')

const controller = {

    create: async(req,res,next) => {
        try {
            let nuevo = await Comida.create(req.body)
            res.status(201).json({
                id: nuevo._id,
                success: true,
                message: "la comida se creó satisfactoriamente"
            })
        } catch(error) {
            next(error)
        }
    },
    
    read: async(req,res,next) => {
        try {
            let todos = await Comida.find().populate("ingredientes","nombre")
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
        } catch(error) {
            next(error)
        }        
    },

    one: async(req,res,next) => {
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
        } catch(error) {
            next(error)
        }        
    },
    
    update: async(req,res,next) => {
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
        } catch(error) {
            next(error)
        }
    },
    
    destroy: async(req,res,next) => {
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
        } catch(error) {
            next(error)
        }
    }

}

module.exports = controller