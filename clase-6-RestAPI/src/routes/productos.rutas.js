import { Router } from "express";
import {
  obtenerProductos,
  eliminarProducto,
  actualizarProductoPatch,
  actualizarProductoPut,
  obtenerUnProducto,
  crearProducto,
} from "../controllers/productos.controllers.js";

const router = Router();

//Endopoint para obtener todos los productos con el metodo GET
router.get("/productos", obtenerProductos);

//Endopoint para obtener un producto por su id con el metodo GET
router.get("/productos/:id", obtenerUnProducto);

//Endpoint para crear productos en nuestro array con el metodo POST
router.post("/productos", crearProducto);

//Endpoint para actualizar un producto en nuestro array con el metodo PUT
router.put("/productos/:id", actualizarProductoPut);

//Endpoint para actualizar un producto en nuestro array con el metodo PATCH
router.patch("/productos/:id", actualizarProductoPatch);

//Endpoint para eliminar un producto de nuestro array con el metodo DELETE
router.delete("/productos/:id", eliminarProducto);

export default router;
