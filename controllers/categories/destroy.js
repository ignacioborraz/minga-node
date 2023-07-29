import Category from '../../models/Category.js'

export default async(req,res,next)=> {
    try {
        let deleted = await Category.findOneAndDelete({_id:req.params.id})
        if (deleted) {
            return res.status(200).json({
                success: true,
                response: 'deleted'
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