//primero requiero el modelo que necesito controlar
const User = require('../models/User')

//segundo defino el objeto controller (que va a controlar el modelo)
const controller = {
    //cada uno de los métodos son asíncronos, porque dependen del tiempo de espera de la peticion/respuesta
    //la funcion asincrona SIMPRE va a depender de dos parámetros:
        //REQ (requerimiento de la peticion)
        //RES (respuesta de la petición)
    //se le puede poner cualquier nombre a los parámetros de la asíncrona
    //pero el primer parámetro SIEMPRE hace referencia al req (require/requerimiento)
    //y el segundo SIEMPRE hace referencia al res (response/respuesta)
    //método para crear un documento USUARIO
    create: async(requerimiento,respuesta) => {
        //el objeto creado en el front (siguiendo la forma del modelo)
        //y ahora guardao en el localStorage es el requerimiento de nuestro método
        //requerimiento va a ser el objeto que tengo que mandar en la peticion
        //en la propiedad body del objeto requerimiento (requerimiento.body)
        //se encuentra guardado el objeto con los datos para
        //construir/crear un nuevo documento        
        try {
            let new_user = await User.create(requerimiento.body)
            //defino una variable que va a esperar la creacion de un nuevo documento (en este caso un usuario)
            //el objeto con los datos necesario para crear un usuario está en requerimiento.body
            //una vez creado el documento, elaboro la respuesta que va a devolver la petición
            //el status de exito de creacion es 201
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
    //método para leer/obtener todos los documentos USUARIO
    read: async(req,res) => {
        try {

        } catch {

        }        
    },
    //método para actualizar un documento USUARIO
    update: async(req,res) => {
        try {

        } catch {

        }
    },
    //método para eliminar un documento USUARIO
    destroy: async(req,res) => {
        try {

        } catch {

        }
    }

}

//tercero exporto el controlador
module.exports = controller