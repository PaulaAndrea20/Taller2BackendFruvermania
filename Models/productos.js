// Implementacion del objeto de sequelize creado en database y los tipos de datos
import { DataTypes } from "sequelize";
import { sequelize } from "../Database/database.js";

//Relación del modelo con la tabla productos
const Producto = sequelize.define(
  "productos",
  {
    // Definición de Atributos
    idProducto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    detalle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    precio: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

export { Producto };
