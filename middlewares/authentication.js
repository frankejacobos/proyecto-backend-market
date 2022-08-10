const { expressjwt: jwt } = require("express-jwt");

module.exports.authenticate = () => {
  let api = process.env.API_URL;
  return jwt({
    secret: process.env.JWT_KEY,
    algorithms: ["HS256"],
    isRevoked: isRevoked,
  }).unless({
    path: [`${api}/users/login`, `${api}/users/register`],
  });
};

async function isRevoked(_req, token) {
  if (!token.payload.isAdmin) {
    return true;
  }
}
