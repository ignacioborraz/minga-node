import { Router } from "express";
import create from "../controllers/payments/create.js";
let paymentsRouter = Router();

paymentsRouter.get("/",create);

export default paymentsRouter;
