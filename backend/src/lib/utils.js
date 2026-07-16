/* the function of this whole file is to provide utility functions for the application */

import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, { // the payload of the token is an object containing the userId, and the secret key is taken from environment variables for security
    expiresIn: "7d",
  });

res.cookie("jwt", token, {
  maxAge: 7 * 24 * 60 * 60 * 1000,
  httpOnly: true, // prevents client-side JavaScript from accessing the cookie, enhancing security
  sameSite: "none",  // allows the cookie to be sent in cross-site requests, which is necessary for our frontend and backend being on different domains. In production, you might want to set this to "strict" or "lax" for better security, depending on your needs.
  secure: true,  // set to true in production for HTTPS, but can be false in development if not using HTTPS
});

  return token;
};
