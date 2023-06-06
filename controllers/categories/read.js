import Category from '../../models/Category.js'

export default async(req,res)=> {
    try {
        let all = await Category.find()
        if (all.length>0) {
            return res.status(200).json({
                success: true,
                response: all
            })
        } else {
            return res.status(404).json({
                success: false,
                message: 'not found'
            })
        }        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'error'
        })
    }
}