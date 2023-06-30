export default (req,res,next)=> {
    if (req.author?.active) {
        return next()
    }
    if (req.company?.active) {
        return next()
    }
    return res.status(403).status({
        success:false,
        response:null,
        messages:['not active']
    })
}