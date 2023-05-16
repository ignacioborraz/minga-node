import mongoose from 'mongoose'

async function connect_db () {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('database connected')
    } catch (error) {
        console.log(error)
    }
}
connect_db()