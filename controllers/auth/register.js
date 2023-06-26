import User from "../../models/User.js"

export default async(req,res,next)=> {
    try {
        let data = req.body
        let one = await User.create(data)
        return res.status(201).json({
            response: 'Id: '+one._id,
            message: 'User created'
        })
    } catch (error) {
        next(error)
    }
}
