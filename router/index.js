import { Router } from "express"
import authRouter from "./auth.js"
import categoriesRouter from "./categories.js"
import authorsRouter from "./authors.js"
import mangasRouter from "./mangas.js"
import chapterRouter from './chapters.js'

let indexRouter = Router()

indexRouter.use('/auth',authRouter)
indexRouter.use('/categories',categoriesRouter)
indexRouter.use('/authors',authorsRouter)
indexRouter.use('/mangas',mangasRouter)
indexRouter.use('/chapters',chapterRouter)

export default indexRouter