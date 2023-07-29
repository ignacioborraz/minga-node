import { Router } from "express"
import create from "../controllers/companies/create.js"
import read_me from "../controllers/companies/read_me.js"
import validator from '../middlewares/validator.js'
import schema_create from '../schemas/companies/create.js'
import has_permition from "../middlewares/has_permition.js"

let companiesRouter = Router()

companiesRouter.post('/',validator(schema_create),create)
companiesRouter.get('/me',has_permition,read_me)

export default companiesRouter