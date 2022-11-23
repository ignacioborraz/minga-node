const User = require("../models/User");
const { userExistsResponse } = require("../responses/auth");

async function accountExists(req, res, next) {
    const user = await User.findByEmail(req.body.email)
    if (user) {
        userExistsResponse()
    }
    return next()
}

module.exports = { accountExists }
