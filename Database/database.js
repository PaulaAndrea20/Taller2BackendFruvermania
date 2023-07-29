//Conexion con la base de datos

import Sequelize from "sequelize";

//Parametros de la base de datos por separado
const sequelize = new Sequelize("fruverpm", "root", "", {
  host: "localhost",
  dialect: "mysql",
});


export { 
  sequelize
}


