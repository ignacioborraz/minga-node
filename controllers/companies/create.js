import Company from '../../models/Company.js'

export default async(req,res,next)=> {
    try {
        req.body.user_id = req.user._id
        let one = await Company.create(req.body)
        return res.status(201).json({
            success: true,
            message: 'created',
            response: one
        })
    } catch (error) {
        next(error)
    }
}