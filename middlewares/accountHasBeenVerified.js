const { verifyResponse } = require("../responses/auth")

function accountHasBeenVerified(req, res, next) {
    if (req.user.verified) {
        return next()
    }
    verifyResponse()
}

module.exports = { accountHasBeenVerified }