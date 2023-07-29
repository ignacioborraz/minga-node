import authRouter from "./auth.js"
import categoriesRouter from "./categories.js"
import authorsRouter from "./authors.js"
import companiesRouter from "./companies.js"
import mangasRouter from "./mangas.js"
import chapterRouter from './chapters.js'

import passport from "passport"

import { Router } from "express"
let indexRouter = Router()

indexRouter.use('/auth',authRouter)
indexRouter.use('/categories',categoriesRouter)
indexRouter.use('/authors',passport.authenticate('jwt',{ session:false }),authorsRouter)
indexRouter.use('/companies',passport.authenticate('jwt',{ session:false }),companiesRouter)
indexRouter.use('/mangas',passport.authenticate('jwt',{ session:false }),mangasRouter)
indexRouter.use('/chapters',passport.authenticate('jwt',{ session:false }),chapterRouter)

export default indexRouter