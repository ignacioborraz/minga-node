//controllers
import register from "../controllers/auth/register.js"
import signin from "../controllers/auth/signin.js"
import signout from "../controllers/auth/signout.js"
import token from "../controllers/auth/signin-token.js"
import read from "../controllers/auth/read.js"

//middlewares
import passport from "../middlewares/passport.js"
import validator from "../middlewares/validator.js"
import accountExistsSignUp from "../middlewares/accountExistsSignUp.js"
import createHash from "../middlewares/createHash.js"
import accountExistsSignIn from "../middlewares/accountExistsSignIn.js"
import isValidPassword from "../middlewares/isValidPassword.js"
import generateToken from "../middlewares/generateToken.js"

//schemas
import register_schema from "../schemas/auth/register.js"
import signin_schema from "../schemas/auth/signin.js"

//router
import { Router } from "express"
let authRouter = Router()

authRouter.post('/register', validator(register_schema), accountExistsSignUp, createHash, register)
authRouter.post('/signin', validator(signin_schema), accountExistsSignIn, isValidPassword, generateToken, signin)
authRouter.post('/signout', passport.authenticate('jwt',{ session:false }), signout)
authRouter.post('/token', passport.authenticate('jwt',{ session:false }), generateToken, token)
authRouter.get('/', read)

export default authRouter