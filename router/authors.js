import { Router } from "express"
import create from "../controllers/authors/create.js"
import read from "../controllers/authors/read.js"

let authorsRouter = Router()

authorsRouter.get('/',read)

export default authorsRouter