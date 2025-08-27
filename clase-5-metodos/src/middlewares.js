import express from "express";
import morgan from "morgan";
import  autenticacion  from "./middleware/autenticacion.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));




app.get("/login", (req, res) => {
  res.send(`<h1>Login</h1>
            <form action="/dashboard" method="get">
                <input type="text" name="userName" placeholder="Nombre de usuario">
                <input type="password" name="password" placeholder="Contraseña">
                <input type="submit" value="Ingresar">
            </form>
        `);
});

app.get("/dashboard", autenticacion, (req, res) => {
  const { userName } = req.query;
  res.send(`Hola ${userName}, te damos la bienvenida`);
});


app.get("/perfil",autenticacion,  (req, res) => {
  res.send(`<h1>Perfil</h1>
            <div>
                <h2>Nombre</h2>
                <p>John</p>
                <h2>Email</h2>
                <p>john@mail.com</p>
                <h2>Contraseña</h2>
                <p>1234</p>
            </div>
        `);
});

app.get("/mis-productos", (req, res) => {
  res.send(`<h1>Mis productos</h1>
            <ul>
                <li>Producto 1</li>
                <li>Producto 2</li>
                <li>Producto 3</li>
            </ul>
        `);
});

app.listen(3000, () => {
  console.log("Servidor corriendo en puerto " + 3000);
});


// app.get('',autenticacion,()=>{})
// app.post('',autenticacion,()=>{})
// app.put('',autenticacion,()=>{})
// app.patch('',autenticacion,()=>{})
// app.delete('',autenticacion,()=>{})
// app.all('',autenticacion,()=>{})


// 1. Vimos el repaso sobre los parametros y los queries en la peticion
// 2. Vimos como enviar informacion mediante el metodo POST que lo recibe en el body
// 3. Vimos como autenticar usuarios mediante middlewares
// 4. Hicimos ejercicios de ejemplos de cada punto visto.