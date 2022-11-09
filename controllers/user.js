const User = require('../models/User')

const controller = {
    
    create: async(requerimiento,respuesta) => { //método para crear un documento USUARIO
        //el objeto creado en el front (siguiendo la forma del modelo)
        //se pasa en en "body" de la petición
        //ese objeto se encuentra en la propiedad "body" del objeto requerimiento
        //y con este objeto construimos un nuevo documento (en este caso un nuevo usuario)
        try {
            let new_user = await User.create(requerimiento.body)
            //defino una variable que va a esperar la creacion de un nuevo documento
            //una vez creado el documento, elaboro la respuesta que va a devolver la petición
            //la respuesta tiene que tener el código de estado: 201 (éxito en la creación)
            //y un json con datos relevantes (en este caso con el id del documento creado, el "éxito" en true y un mensaje)
            respuesta.status(201).json({
                id: new_user._id,
                success: true,
                message: "el usuario se creó satisfactoriamente"
            })
        } catch(error) {
            //en caso de que no haya éxito al crear un nuevo documento
            //elaboro la respuesta del error
            //codigo de estado: 400
            //json con datos relevantes (en este caso el "éxito" en false y el mensaje del error)
            respuesta.status(400).json({
                success: false,
                message: error.message
            })
        }
    },

    read: async(req,res) => { //método para leer/obtener todos los USUARIO
        console.log('REQ.PARAMS')
        console.log(req.params)
        console.log('REQ.QUERY')
        console.log(req.query)
        console.log('REQ.BODY')
        console.log(req.body)
        try {
            let todos = await User.find()
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