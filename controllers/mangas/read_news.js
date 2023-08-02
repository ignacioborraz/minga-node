import Manga from '../../models/Manga.js'

export default async(req,res,next)=> {
    try {
        let query = {}
        let count = 0
        req.author && (query.author_id=req.author._id)
        req.company && (query.company_id=req.company._id)
        count = await Manga.countDocuments(query)
        if (count<4) {
            return res.status(200).json({
                success: true,
                response: {
                    logo: '/public/logo.png'
                }
            })
        } else if (count<8) {
            let news = await Manga.find(query,'title cover_photo createdAt').sort({ createdAt:1 }).limit(2)
            let olds = await Manga.find(query,'title cover_photo createdAt').sort({ createdAt:-1 }).limit(2)
            return res.status(200).json({
                success: true,
                response: { all: [...news,...olds] }
            })
        } else {
            let news = await Manga.find(query,'title cover_photo createdAt').sort({ createdAt:1 }).limit(4)
            let olds = await Manga.find(query,'title cover_photo createdAt').sort({ createdAt:-1 }).limit(4)
            return res.status(200).json({
                success: true,
                response: { news,olds }
            })
        }
    } catch (error) {
        next(error)
    }
}