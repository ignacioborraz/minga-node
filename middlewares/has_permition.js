import Author from '../models/Author.js'
import Company from '../models/Company.js'

//esta funcion sirve para verificar que el usuario que intenta
//CREAR/ACTUALIZAR/ELIMINAR un manga/capitulo sea autor/empresa

export default async(req,res,next) => {
    //req.user tiene los datos del USER
    //debo buscar un autor/empresa
    //que coincida que su user_id sea igual al id de ese USER
    if ( req.user.role===1||req.user.role===2 ) {
        let author = await Author.findOne({ user_id:req.user._id })
        if (author) {
            req.body.author_id = author._id
            return next()
        }
        let company = await Company.findOne({ user_id:req.user._id })
        if (company) {
            req.body.company_id = company._id
            return next()
        }
    }
    return res.status(400).json({
        success:false,
        response:null,
        message:'not allow'
    })
}