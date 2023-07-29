import Manga from '../../models/Manga.js'

export default async(req,res,next)=> {
    try {
        let { id } = req.params
        let one = await Manga.findById(id,'-createdAt -updatedAt -__v')
        if (one) {
            return res.status(200).json({
                success: true,
                manga: one
            })
        } else {
            return res.status(404).json({
                success: false,
                message: 'not found'
            })
        }        
    } catch (error) {
        next(error)
    }
}