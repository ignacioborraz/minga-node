import { Router } from "express";
import read from '../controllers/mangas/read.js'
import validator from "../middlewares/validator.js";
import passport from "passport"
import has_permition from "../middlewares/has_permition.js"
import create from "../controllers/mangas/create.js";
import create_schema from "../schemas/mangas/create.js"

let mangasRouter = Router()

mangasRouter.get('/',passport.authenticate('jwt',{ session:false }),read)
mangasRouter.post('/',passport.authenticate('jwt',{ session:false }),validator(create_schema),has_permition,create)

export default mangasRouter