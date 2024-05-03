//Importar dependencias
//Rutas que conectan el front (está en el servidor) - con lógica

import express from "express";
import { getUsuario, postUsuario, putUsuario,deleteUsuario } from "../controllers/usuario.controller.js";

//Definir la variable para las rutas
const usuarioRouter = express.Router();

//Definir las rutas especificas
//Ruta para crear usuarios
usuarioRouter.get("/obtenerUsuario", getUsuario);

//Ruta para crear usuarios
usuarioRouter.post("/crearUsuario", postUsuario);

//Ruta para modificar usuarios por su ID -> identificador unico
usuarioRouter.put("/modificarUsuario/:_id", putUsuario);

//Ruta para eliminar usuarios por su id
usuarioRouter.delete("/eliminarUsuario/:_id", deleteUsuario);




//Exportar las rutas
export default usuarioRouter;







