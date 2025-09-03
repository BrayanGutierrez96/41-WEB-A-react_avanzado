import API_CONFIG from "./config/api.config.js";
import {connect} from "mongoose";


export const conexion = async()=>{
    try {
       const respuesta = await connect(`mongodb+srv://${API_CONFIG.DB_USER}:${API_CONFIG.DB_PASS}@cluster0.tdkdn8k.mongodb.net/`)
       if(!respuesta) throw new Error("Error de conexión a la base de datos");
        console.log("Conexión exitosa a la base de datos");
    } catch (error) {
        console.log(error.errorResponse.errmsg)
    }
}


