import User from "../models/User.js"
import passport from "passport"
import { Strategy,ExtractJwt } from "passport-jwt"

export default passport.use(
    new Strategy(
        {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.SECRET
        },				
        async (jwt_payload,done) => {
            try {				
                let user = await User.findOne({_id:jwt_payload._id})
                delete user._id
                delete user.password
                if (user) {		
                    return done(null, user)
                } else {
                    return done(null, false)
                }
            } catch (error) {
                return done(error,false)
            }
        }
    )
)