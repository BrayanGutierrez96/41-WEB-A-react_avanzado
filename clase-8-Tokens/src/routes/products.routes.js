import {Router} from "express";
import {validateToken} from "../middlewares/auth.js";

const router = Router();

router.use(validateToken)

router.get("/", (req, res) => {
  res.json({ mensaje: "Hola desde productos" });
});


export default router;