import 'dotenv/config.js'
import '../../config/database.js'
import Author from '../Author.js'
import User from '../User.js'

let authors = [{
    name: "lucas",
    last_name: "silva",
    city: "buenos aires",
    country: "argentina",
    photo: "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg",
    active: true,
    user_id: 'lucas@mh.com.ar'
},{
    name: "jose",
    last_name: "lopez",
    city: "villa carlos paz",
    country: "argentina",
    photo: "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg",
    active: true,
    user_id: "jose@mh.com.ar"
}]

for (let author of authors) {
    let user = await User.findOne({ email: author.user_id })
    author.user_id = user._id
    await Author.create(author)
}