import Manga from "../../models/Manga.js"

export default async(req,res,next)=> {
    try {
        let one = await Manga.create(req.body)
        return res.status(201).json({
            response: 'Id: '+one._id,
            message: 'Manga created'
        })
    } catch (error) {
        next(error)
    }
}
