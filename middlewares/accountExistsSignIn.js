const User = require("../models/User");
const { invalidCredentialsResponse } = require("../responses/auth");

async function accountExists(req, res, next) {
    const user = await User.findByEmail(req.body.email)
    if (user) {
        req.user = user
        return next()
    }
    invalidCredentialsResponse()
}

module.exports = { accountExists }
