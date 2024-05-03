//Importar la dependencia 
import mongoose from "mongoose";
const schema = mongoose.Schema;


//Crear el esquema de datos
const usuarioSchema = new schema({
    nombreCompleto:{
        type: String,
        required: true
    },
    correoElectronico:{
        type: String,
        required: true
    },
    contrasena:{
        type: String,
        required: true
    }
});

//Enviar el esquema a la base de datos
//Crear modelo

const usuarioModel = mongoose.model("usuario", usuarioSchema);

//Exportar modelo

export default usuarioModel;

