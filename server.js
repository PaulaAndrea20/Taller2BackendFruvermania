/*Archivo principal server.js*/

import express from 'express';
import router from "./Routes/routes.js"

import { sequelize } from "./Database/database.js";

//Crear Instancia
const app = express();

// Middleware- Montar enrutador en app principal
app.use(express.json());
app.use(router);


//Establecer variable port y asignarle el valor de 3000
app.set('port', 3000);

//Test a Base de datos
const testDb = async () => {
    try {
      await sequelize.sync();
      console.log(`Conexion realizada con éxito`);
      //Correr el servicio por puerto 3000
      app.listen(app.get('port'),()=>{
        console.log(`Servidor escuchando por puerto ${app.get('port')}`);
});
} catch (error) {
    console.log(`Error al realizar conexión ${error}`);
  }
};

testDb();