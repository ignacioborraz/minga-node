import Chapter from "../models/Chapter.js"

export default async(req,res,next)=> {
    if (req.body.order) {
        let one = await Chapter.findOne({ manga_id:req.body.manga_id,order:req.body.order })
        if (one) {
            return res.status(400).json({
                success:false,
                response:null,
                messages:['change order!']
            })
        }
        return next()
    }
    return next()
}