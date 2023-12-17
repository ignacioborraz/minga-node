import User from "../../models/User.js";

export default async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user._id, { online: true });
    console.log({ signed: req.signedCookies["token"] });
    return res
      .status(200)
      .cookie("token", req.token, {
        maxAge: 60 * 60 * 24 * 7 * 1000,
        signed: true,
        sameSite: "none",
        secure: true,
      })
      .json({
        response: { token: req.token, user: req.user },
        message: "User signin",
      });
  } catch (error) {
    next(error);
  }
};
