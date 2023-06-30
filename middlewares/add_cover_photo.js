export default async(req,res,next)=> {
    req.body.cover_photo = req.body.pages[0]
    return next()
}