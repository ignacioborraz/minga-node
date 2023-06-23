import Author from '../../models/Author.js'

export default async(req,res)=> {
    try {
        let one = await Author.create(req.body)
        return res.status(201).json({
            success: true,
            message: 'created',
            response: one
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            response: null,
            harold: true,
            message: 'error'
        })
    }
}