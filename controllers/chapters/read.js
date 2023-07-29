import Manga from '../../models/Manga.js'

export default async(req,res,next)=> {
    try {
        let queries = {}
        let pagination = {
            page:1,
            limit:4
        }
        req.query.category && (queries.category_id = req.query.category.split(','))
        req.query.title && (queries.title = new RegExp(req.query.title.trim(),'i'))
        req.query.page && (pagination.page = req.query.page)
        req.query.limit && (pagination.limit = req.query.limit)
        let skip = (pagination.page>0) ?
                   (pagination.page-1)*pagination.limit : 0
        let limit = pagination.limit>0 ?
                   pagination.limit : 0
        let all = await Manga.find(queries,'title cover_photo category_id').sort({ title:1 }).skip(skip).limit(limit).populate('category_id','name')
        if (all.length>0) {
            let total = await Manga.countDocuments(queries)
            let pages = Math.ceil(total/pagination.limit)
            let current_page = Number(pagination.page)
            let prev_page = current_page===1 ? null : current_page-1
            let next_page = current_page===pages ? null : current_page+1
            return res.status(200).json({
                success: true,
                mangas: all,
                next: next_page,
                prev: prev_page
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