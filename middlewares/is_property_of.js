import Manga from "../models/Manga.js"

export default async(req,res,next)=> {
    if (req.author) {
        let one = await Manga.findOne({ _id:req.body.manga_id,author_id:req.author._id })
        if (one) {
            return next()
        }
    }
    if (req.company) {
        let one = await Manga.findOne({ _id:req.body.manga_id,company_id:req.company._id })
        if (one) {
            return next()
        }
    }
    return res.status(403).status({
        success:false,
        response:null,
        messages:['not allow']
    })
}