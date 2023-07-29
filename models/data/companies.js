import 'dotenv/config.js'
import '../../config/database.js'
import Company from '../Company.js'
import User from '../User.js'

let companies = [{
    name: "hubber",
    logo: "https://play-lh.googleusercontent.com/Yo4PbTmRsfYRfBfH7LdnlD73jh14l83wn--kMlvwwbrlEhZPuJoofM6LpshmoQ8dgQ",
    website: "www.hubber.com.ar",
    description: "edit this property later",
    active: true,
    user_id: "eric@mh.com.ar"
},{
    name: "mindy",
    logo: "https://chatbots.clientify.net/images/XcJQYIUlogo_fb.png",
    website: "www.mindy.com.ar",
    description: "edit this property later",
    active: true,
    user_id: 'igna@mh.com.ar'
}]

for (let company of companies) {
    let user = await User.findOne({ email: company.user_id })
    company.user_id = user._id
    await Company.create(company)
}