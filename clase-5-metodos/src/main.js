import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Parametros de la peticion
app.get("/profile/:id/nombre/:nombre", (peticion, respuesta) => {
  const { id, nombre } = peticion.params;
  const idNumerico = parseInt(id);
  if (!isNaN(idNumerico)) {
    respuesta.send(
      `<h1>Soy el usuario con el id ${id} y el nombre ${nombre}</h1>`
    );
  } else respuesta.send(`<h1>Error: id no es un numero valido</h1>`);
});

//Queries de la peticion

app.get("/search", (req, res) => {
  const { libro } = req.query;
  if (!libro) return res.send("<h1>Debes ingresar un libro</h1>");
  res.send(`<h2>Lista de libros</h2>
            <ol>
                <li>El libro de la vida</li>
                <li>El libro de la muerte</li>
                <li>El libro de la muerte</li>
                <li>La vida es una cancion</li>
            </ol>
        `);
});

app.get("/register", (peticion, respuesta) => {
  respuesta.send(`<form action="/profile" method="post">
        <input type="text" name="userName" placeholder="Nombre de usuario">
        <input type="email" name="email" placeholder="Email">
        <input type="password" name="password" placeholder="Contraseña">
        <input type="submit" value="Registrarse">
        </form>
        `);
});



app.post("/profile", (peticion, respuesta) => {
  const { userName, email, password } = peticion.body;

  if (!userName || !email || !password)
    return respuesta.send("<h1>Debes completar todos los campos</h1>");

  if (email === "john@mail.com") {
    if (password === "1234") {
      respuesta.json({ userName, email, password });
    }
  }
  respuesta.send(`<h1>Datos incorrectos</h1>`);
});

app.all("/products",(req,res)=>{})


app.listen(3000, () => {
  console.log("Servidor corriendo en puerto " + 3000);
});

// localhost:3000/profile
// localhost:3000/search?nombre%20del%20libro=La%20vida%20es%20una%20cancion&autor=VERONICA%20BECERRA

// ? Estructura para inicair un query
// & Estructura para continuar enviando más queries
// %20 Para enviar un espacio en el query
