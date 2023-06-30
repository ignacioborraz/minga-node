import { Router } from "express"
import read from '../controllers/chapters/read.js'
import create from "../controllers/chapters/create.js"
import passport from "passport"
import has_permition from "../middlewares/has_permition.js"
import is_active from "../middlewares/is_active.js"
import is_property_of from "../middlewares/is_property_of.js"
import add_cover_photo from "../middlewares/add_cover_photo.js"
import exists_order from "../middlewares/exists_order.js"
import next_order from "../middlewares/next_order.js"
import validator from "../middlewares/validator.js"
import create_schema from "../schemas/chapters/create.js"

let chaptersRouter = Router()
chaptersRouter.post('/',
    passport.authenticate('jwt',{ session:false }),
    validator(create_schema),
    has_permition,
    is_active,
    is_property_of,
    add_cover_photo,
    exists_order,
    next_order,
create)
chaptersRouter.get('/',read)

export default chaptersRouter