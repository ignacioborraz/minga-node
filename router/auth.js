import { Router } from "express";
import read from '../controllers/auth/read.js'

let authRouter = Router()

authRouter.get('/',read)

export default authRouter