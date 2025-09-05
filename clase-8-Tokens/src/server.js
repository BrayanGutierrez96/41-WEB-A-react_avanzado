import API_CONFIG from "./config/config.js";
import app from "./app.js";
import {dbConexion} from "./db.js";


const PORT = process.env.PORT || API_CONFIG.SERVER_PORT;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});