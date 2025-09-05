import { connect } from "mongoose";
import API_CONFIG from "./config/config.js";

export const dbConexion = (async()=>{
    try{
        const dbConnect = await connect(`mongodb+srv://${API_CONFIG.DB_USER}:${API_CONFIG.DB_PASS}@cluster0.tdkdn8k.mongodb.net/`)
        if(!dbConnect) throw new Error("Error de conexión a la base de datos");
        console.log("Conexión exitosa a la base de datos");

    }catch(error){
        console.log(error)
    }
})();
