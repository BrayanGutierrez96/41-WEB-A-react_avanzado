import jwt from "jsonwebtoken";

export const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.SECRET_KEY, (error, tokenDecoded) => {
      if (error) reject(error);
      resolve(tokenDecoded);
    });
  });
};
