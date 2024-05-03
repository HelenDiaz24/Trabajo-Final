//Importar dependencias para el funcionamiento del código

import usuarioModel from "../models/usuario.model.js";

/*
    ->PETICIONES
    GET-> mostrar los usuarios
    POST-> crear usuario
    PUT-> modificar los usuarios
    DELETE-> eliminar usuarios
*/

//PRUEBA INICIAL
//LOGICA PARA MOSTRAR USUARIOS
export const getUsuario = async(req, res) => {
    //Manejo de errores con try y catch

    try{
        let usuarios = await usuarioModel.find();
        return res.send(usuarios);
    }catch(error){
        return res.json({error: "error al mostrar los datos" + error});
    }
}

//LOGICA PARA CREAR USUARIOS
export const postUsuario = async(req, res) => {

    try{
        let datosUsuario = req.body;
        console.log(datosUsuario)
        let nuevoUsuario = await usuarioModel.create(datosUsuario);
        return res.json(nuevoUsuario);

    }catch(error){
        return res.json({error: "error al crear el usuario",
        message:error.message});
    }
}


//lOGICA PARA MODIFICAR
export const putUsuario = async(req, res) => {
    return res.send("Funciona la petición PUT");
}

//LOGICA PARA ELIMINAR USUARIOS
export const deleteUsuario = async(req, res) => {
    return restart.send("Funciona la petición DELETE");
}


