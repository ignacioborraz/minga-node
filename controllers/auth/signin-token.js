export default (req, res, next) => {
  try {
    return res
      .status(200)
      .cookie("token", req.token, {
        maxAge: 60 * 60 * 24 * 7 * 1000,
        signed: true,
      })
      .json({
        response: { token: req.token, user: req.user },
        success: true,
        message: "User signin with token",
      });
  } catch (error) {
    next(error);
  }
};
