import express from "express";
import morgan from "morgan";
import usersRoutes from "./routes/users.routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use("/api/v1/users",usersRoutes);


app.use((req,res,next)=>{
    res.status(404).json({
        mensaje:"Ruta no definida",
        estado: "404 NOT_FOUND",
    });
})

export default app;