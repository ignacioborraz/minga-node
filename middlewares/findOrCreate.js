import User from "../models/User.js";
import bcryptjs from "bcryptjs";

export default async (req, res, next) => {
  try {
    let user = await User.findOne({ email: req.user.email });
    if (!user) {
      req.user.password = bcryptjs.hashSync(req.body.token_id, 10);
      user = await User.create(req.user);
    }
    req.user._id = user._id;
    return next();
  } catch (error) {
    next(error);
  }
};
