//1. Importar las dependencias que se van a usar
import express from "express";
import path from "path";
import dotenv from "dotenv"
import conexionMongo from "./src/config/baseDatos.js";
import usuarioRouter from "./src/routes/usuario.routes.js";


//2. Configurar servidor
const app = express();
const puerto = 9000;

//2.1. Configurar variables de entorno
dotenv.config();

//2.2. Configurar conexión base de datos
conexionMongo();



//3. ESTABLECER CONEXIÓN CON FRONT
const rutaPublica = path.join(process.cwd(), "public");
app.use(express.static(rutaPublica));
app.use(express.json());
app.use("/api", usuarioRouter);


//Especificar el acceso a index.html
app.get("/",(req, res) => {
    res.sendFile(path.join(rutaPublica, "index.html"))
});

//4. INICIALIZAR SERVIDOR
app.listen(puerto, () => {
console.log(`El servidor está escuchando en http://localhost:${puerto}`);
});



