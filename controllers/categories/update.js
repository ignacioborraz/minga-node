import Category from '../../models/Category.js'

export default async(req,res,next)=> {
    try {
        let updated = await Category.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
        if (updated) {
            return res.status(200).json({
                success: true,
                response: updated
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