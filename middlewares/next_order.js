import Chapter from "../models/Chapter.js"

export default async(req,res,next)=> {
    let order = 1
    let one = await Chapter.findOne({ manga_id:req.body.manga_id }).sort({ order:'-1' })
    if (one) {
        req.body.order = one.order+1
    } else {
        req.body.order = order
    }
    return next()
}