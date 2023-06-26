let counter = 1
export default function(req,res,next) {
    let time = new Date()
    console.log(time)
    counter++
    console.log(counter)
    next()
}