import { verifyToken } from "../libs/verifyToken.js";
export const validateToken = async (req, res, next) => {
  try {
    let token = req.headers["authorization"]
   if(token.startsWith("Bearer ")) token = token.slice(7)
    if (!token) return res.status(401).json({ mensaje: "No estás autenticado" });

    const decodedToken = await verifyToken(token);

    if (!decodedToken)
     return res.status(401).json({ mensaje: "No estás autenticado" });

    if (!decodedToken.id || !decodedToken.sid)
      return res.status(401).json({ mensaje: "No estás autenticado" })

    next();
  } catch (error) {
    res.status(500).json({ mensaje: error });
  }
};


