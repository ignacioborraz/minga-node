import Chapter from '../../models/Chapter.js'

export default async(req,res,next)=> {
    try {
        let one = await Chapter.findById(req.params.id,'manga_id order pages')
        if (one) {
            let next_page = await Chapter.findOne({ manga_id:one.manga_id,order:one.order+1 },'_id')
            if (next_page) {
                return res.status(200).json({
                    success: true,
                    pages: one.pages,
                    next: next_page
                })
            } else {
                return res.status(200).json({
                    success: true,
                    pages: one.pages,
                    next: null,
                    manga_id: one.manga_id,
                    order: one.order
                })
            }
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