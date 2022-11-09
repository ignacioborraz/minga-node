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
/*     
    read: async(req,res) => { //método para leer/obtener todos los USUARIO
        try {
        } catch {
        }
    },

    one: async(req,res) => { //método para leer/obtener todos un USUARIO
        try {
        } catch {
        }
    },
    
    update: async(req,res) => { //método para actualizar un USUARIO
        try {
        } catch {
        }
    },
    
    destroy: async(req,res) => { //método para eliminar un USUARIO
        try {
        } catch {
        }
    }
 */
}

module.exports = controller