import { OAuth2Client } from "google-auth-library";

export default async (req, res, next) => {
  const client = new OAuth2Client();
  const { token_id } = req.body;
  const vefifyTicket = await client.verifyIdToken({
    idToken: token_id,
    audience: process.env.GOOGLE_CLIENT_ID,
  });
  const payload = vefifyTicket.getPayload();
  console.log(payload);
  let user = {
    name: payload.name,
    email: payload.email,
    photo: payload.picture,
    online: true,
    google: true,
    role: 0
  };
  req.user = user
  return next()
};
