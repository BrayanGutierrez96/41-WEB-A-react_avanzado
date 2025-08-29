import express from "express";
import productosRouter from './routes/productos.rutas.js'
import { rutasNoDefinidas } from "./middlewares/rutasNoDefinidas.js";
const app = express();
app.use(express.json());
app.use("/api/v1",productosRouter)
app.use(rutasNoDefinidas)


app.listen(4000, () => {
  console.log("Servidor en el puerto 4000");
});
