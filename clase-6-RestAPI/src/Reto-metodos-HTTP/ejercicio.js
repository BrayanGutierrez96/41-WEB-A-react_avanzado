import express from "express";

const app = express();


//Las rutas se conocen como endpoints
app.get("/task", (req, res) => {
    res.send("<h1>Mostrando todas las tareas</h1>")
});
app.post("/task", (req, res) => {
    res.send("<h1>Nueva tarea creada</h1>")
});
app.put("/task/:id", (req, res) => {
    res.send(`<h1>Tarea con id ${req.params.id} actualizada</h1>`)
});
app.patch("/task/:id", (req, res) => {
    res.send(`<h1>Tarea con id ${req.params.id} actualizada</h1>`)
});
app.delete("/task/:id", (req, res) => {
    res.send(`<h1>Tarea con id ${req.params.id} eliminada   </h1>`)
});

app.all("/", (req, res) => {
    res.send("<h1>Método no permitido en esta ruta</h1>")
});

app.listen(4000, () => console.log(`Servidor en el puerto ${4000} `));
