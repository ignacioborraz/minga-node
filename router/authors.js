import { Router } from "express"
import create from "../controllers/authors/create.js"
import read_me from "../controllers/authors/read_me.js"
import validator from '../middlewares/validator.js'
import schema_create from '../schemas/authors/create.js'
import has_permition from "../middlewares/has_permition.js"

let authorsRouter = Router()

authorsRouter.post('/',validator(schema_create),create)
authorsRouter.get('/me',has_permition,read_me)

export default authorsRouter