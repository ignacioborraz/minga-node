export default (req,res)=> {
    return res.status(200).json({
        succes: true,
        message: '/mangas'
    })
}