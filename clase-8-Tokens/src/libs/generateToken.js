import jwt from "jsonwebtoken";
import crypto from "crypto";
export const generateToken = (idUser) => {
    const sessionId = crypto.randomUUID();
    console.log(sessionId)
  return new Promise((resolve, reject) => {
    jwt.sign(
      { id: idUser,
        sid : sessionId
       },
      process.env.SECRET_KEY,
      { expiresIn: "1h" },
      (error, token) => {
        if (error) reject(error);
        resolve(token);
      }
    );
  });
};

