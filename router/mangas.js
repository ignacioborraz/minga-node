import create from "../controllers/mangas/create.js";
import read from "../controllers/mangas/read.js";
import read_one from "../controllers/mangas/read_one.js";
import read_news from "../controllers/mangas/read_news.js";
import read_me from "../controllers/mangas/read_me.js";
import update from "../controllers/mangas/update.js";
import destroy from "../controllers/mangas/destroy.js";

import create_schema from "../schemas/mangas/create.js";
import validator from "../middlewares/validator.js";
import has_permition from "../middlewares/has_permition.js";

import { Router } from "express";
let mangasRouter = Router();

mangasRouter.post("/", validator(create_schema), has_permition, create);
mangasRouter.get("/", read);
mangasRouter.get("/news", has_permition, read_news);
mangasRouter.get("/me", has_permition, read_me);
mangasRouter.get("/:id", read_one);
mangasRouter.put("/:id", update);
mangasRouter.delete("/:id", destroy);

export default mangasRouter;
