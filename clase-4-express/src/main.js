// Esta es la manera de hacer un servidor web con node.js vanilla
// import http from "http";
// import fs from "fs";
// const servidor = http.createServer((req, res) => {
//   if (req.url === "/") {
//     const archivo = fs.createReadStream("./static/index.html");
//     archivo.pipe(res);
//   } else if (req.url === "/about") {
//     const archivo = fs.createReadStream("./static/about.html");
//     archivo.pipe(res);
//   }
// });
// servidor.listen(3000);
// console.log("El servidor está corriendo en el puerto " + 3000);

//------------Esta es la manera de levantar un servidor web con Express ------------------
// import express from 'express';
// import path from 'path';
// import { fileURLToPath } from 'url';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename, '../static');
// const app = express()
// app.get("/",(req,res)=>{
//     res.sendFile('index.html',{
//         root: path.join(__dirname, '../static')
//     })
// })
// app.listen(3000)
// console.log("El servidor está corriendo en el puerto " +3000);

//Enseñamos a enviar informacion desde el servidor mediante send, sendFile, json, y status
// import express, { json } from 'express';

// const app = express();

// // app.use(express.static('static'));

// app.get('/usuario/eliminar',(req,res)=>{
//     res.send('Usuario eliminado')
// })
// app.get('/usuario/creado',(req,res)=>{
//     res.json({
//         nombre: "Bryan",
//         email: "bryan@gmail.com",
//         id:1,
//         edad:25,
//         pais:"Colombia"
//     })
// })

// app.get('/usuario/actualizado',(req,res)=>{
//     res.status(200).sendStatus(200)
// })
// app.listen(3000, () => {
//     console.log("El servidor está corriendo en el puerto " +3000);
// });


//Recibimos parametros desde la URL del lado del cliente

// app.get('/suma/:a/:b',(req,res)=>{
//     const {a,b} = req.params
//     const resultado = parseInt(a) + parseInt(b)   

//     res.send(`El resultado es ${resultado}` )
// })

//Recibimos Query's desde la URL del lado del cliente

// app.get('/querys',(req,res)=>{
//     const {nombre} = req.query
//     console.log(req.query)
//     if(nombre == ""){
//        return res.status(404).send("No se ha encontrado el usuario")
//     }
//     if(nombre == "John"){
//        return res.send("Hola John")
//     }
// })

// app.post('/usuario',(req,res)=>{
//     res.send(`Usuario creado`)
// })






//Asi configuramos fetch desde el front-end
// const data = [{},{},{},{}]


// fetch('http://mipagina.com/v1/api/usuarios',{
//     method: 'POST',
//     headers:{
//         'content-type': 'application/json'
//     },
//     body:JSON.stringify(data)
// }).then((respuesta)=>{json(respuesta)}).then(resp=>{resp.map((elemento)=>{})})




    import express from 'express';

    const app = express();

        app.get('/',(peticion,respuesta)=>{
            console.log(peticion.query)
            const john = peticion.query.nombre
            const apellido = peticion.query.apellido.toLowerCase()
            if(john && apellido === "doe"){
            return  respuesta.send(`Hola John Doe`)
            }
            respuesta.sendStatus(400  )

    })


    app.listen(3000)
    console.log("El servidor está corriendo en el puerto " +3000);