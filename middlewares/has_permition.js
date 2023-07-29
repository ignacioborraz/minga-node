import Author from "../models/Author.js"
import Company from "../models/Company.js"

export default async(req,res,next)=> {
    if (req.user.role===1) {
        let one = await Author.findOne({ user_id:req.user._id },'-createdAt -updatedAt -__v')
        req.body.author_id = one._id
        req.author = one
        return next()
    }
    if (req.user.role===2) {
        let one = await Company.findOne({ user_id:req.user._id },'-createdAt -updatedAt -__v')
        req.body.company_id = one._id
        req.company = one
        return next()
    }
    return res.status(403).status({
        success:false,
        response:null,
        messages:['not allow']
    })
}