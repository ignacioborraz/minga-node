export default (req, res, next) => {
  console.log(req.signedCookies["token"]);
  return next();
};
