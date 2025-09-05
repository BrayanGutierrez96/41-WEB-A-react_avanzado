import express from "express";
import userRoutes from "./routes/user.routes.js";
import productsRoutes from "./routes/products.routes.js";
import cookieParser from "cookie-parser";
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use("/api/v1/user", userRoutes)
app.use("/api/v1/products", productsRoutes)




app.use((req,res)=>{
    res.status(404).json({mensaje:"Ruta no definida"})
})

export default app;
