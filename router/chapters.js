import create from "../controllers/chapters/create.js";
import read from "../controllers/chapters/read.js";
import read_one from "../controllers/chapters/read_one.js";
import read_me from "../controllers/chapters/read_me.js";
import update from "../controllers/chapters/update.js";
import destroy from "../controllers/chapters/destroy.js";

import has_permition from "../middlewares/has_permition.js";
import is_active from "../middlewares/is_active.js";
import is_property_of from "../middlewares/is_property_of.js";
import add_cover_photo from "../middlewares/add_cover_photo.js";
import exists_order from "../middlewares/exists_order.js";
import next_order from "../middlewares/next_order.js";
import validator from "../middlewares/validator.js";
import create_schema from "../schemas/chapters/create.js";

import { Router } from "express";
let chaptersRouter = Router();

chaptersRouter.post(
  "/",
  validator(create_schema),
  has_permition,
  is_active,
  is_property_of,
  add_cover_photo,
  exists_order,
  next_order,
  create
);
chaptersRouter.get("/", read);
chaptersRouter.get("/me", has_permition, read_me);
chaptersRouter.get("/:id", has_permition, is_active, is_property_of, read_one);
chaptersRouter.put("/", has_permition, is_active, is_property_of, exists_order, update);
chaptersRouter.delete("/:id", destroy);

export default chaptersRouter;
