import { Router } from "express"
import create from "../controllers/authors/create.js"
import read from "../controllers/authors/read.js"
import validator from '../middlewares/validator.js'
import schema_create from '../schemas/authors/create.js'

let authorsRouter = Router()

authorsRouter.post('/',validator(schema_create),create)
authorsRouter.get('/',read)

export default authorsRouter