import {data } from '../data.js'

let productos = data
let siguienteId = productos.reduce((acumulador, producto)=>( Math.max(acumulador,producto.id)),0) 
console.log(siguienteId)

export const crearProducto = (req, res) => {
  siguienteId++;
  const dataDelProducto = req.body;
  const nuevoProducto = { ...dataDelProducto, id: siguienteId };
  productos.push(nuevoProducto);
  res.status(201).json({
    mensaje: `Producto creado: ${nuevoProducto.nombre} exitosamente`,
    status: "Created",
  });
};

export const obtenerProductos = (req, res) => {
  res.json(productos);
};

export const obtenerUnProducto = (req, res) => {
  const { id } = req.params;
  const productoEncontrado = productos.find((item) => {
    return item.id === parseInt(id);
  });
  if (!productoEncontrado)
    return res.status(404).json({ mensaje: "Producto no encontrado" });
  res.json(productoEncontrado);
};
export const actualizarProductoPut = (req, res) => {
  const { id } = req.params;
  const dataActualizar = req.body;
  const productoEncontrado = productos.find(
    (producto) => producto.id === parseInt(id)
  );
  if (!productoEncontrado) return res.sendStatus(404);

  const productoActualizado = productos.map((producto) =>
    producto.id === parseInt(id) ? { ...producto, ...dataActualizar } : producto
  );
  productos = productoActualizado;
  res.status(200).json({
    mensaje: `El producto ${productoEncontrado.nombre} se actualizó`,
    status: "Modificado",
  });
};
export const actualizarProductoPatch = (req, res) => {
  const { id } = req.params;
  const valorNuevo = req.body;

  const indiceProducto = productos.findIndex(
    (producto) => producto.id === parseInt(id)
  );
  console.log(indiceProducto);
  if (indiceProducto === -1) return res.sendStatus(404);

  productos[indiceProducto] = { ...productos[indiceProducto], ...valorNuevo };
  console.log(productos[indiceProducto]);
  res.status(200).json(indiceProducto);
};

export const eliminarProducto = (req, res) => {
  const { id } = req.params;
  const productoEncontrado = productos.find(
    (producto) => producto.id === parseInt(id)
  );
  if (!productoEncontrado)
    return res.status(404).json({ mensaje: "Producto no encotrado" });
  const productosNuevos = productos.filter(
    (producto) => producto.id !== parseInt(id)
  );
  productos = productosNuevos;
  res.status(200).json({
    mensaje: "Producto eliminado exitosamente",
    producto: productoEncontrado,
  });
};
