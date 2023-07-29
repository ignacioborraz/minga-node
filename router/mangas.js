import read from '../controllers/mangas/read.js'
import read_one from "../controllers/mangas/read_one.js"
import read_news from "../controllers/mangas/read_news.js"

import validator from "../middlewares/validator.js"
import has_permition from "../middlewares/has_permition.js"
import create from "../controllers/mangas/create.js"
import create_schema from "../schemas/mangas/create.js"

import { Router } from "express"
let mangasRouter = Router()

mangasRouter.post('/',validator(create_schema),has_permition,create)
mangasRouter.get('/',read)
mangasRouter.get('/news',has_permition,read_news)
mangasRouter.get('/:id',read_one)

export default mangasRouter