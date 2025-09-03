import app from "./app.js";
import API_CONFIG from "./config/api.config.js";
import {conexion} from "./db.js";

conexion();

const PORT = process.env.PORT || API_CONFIG.SERVER_PORT;
const DP_PASSWORD = API_CONFIG.DB_PASS ? "*****" : "❌ Incorrect password" ;
console.log(`Db User: ${API_CONFIG.DB_USER}`);
console.log(`Db Password: ${DP_PASSWORD}`); 

app.listen(PORT ,()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})