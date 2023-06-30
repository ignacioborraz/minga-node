import Chapter from '../../models/Chapter.js'

export default async(req,res,next)=> {
    try {
        console.log(req.body);
        let one = await Chapter.create(req.body)
        console.log(one);
        return res.status(201).json({
            success: true,
            message: 'created',
            response: one
        })
    } catch (error) {
        return next(error)
    }
}