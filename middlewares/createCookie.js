export default (req, res, next) => {
  console.log({ signed: req.signedCookies["token"] });
  return next();
};
