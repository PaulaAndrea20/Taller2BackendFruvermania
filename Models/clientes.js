import { DataTypes } from "sequelize";
import { sequelize } from "../Database/database.js";

//Importar el modelo clientes
const Cliente = sequelize.define(
    "clientes",
    {
        // Definicion de Atributos
        idCliente: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombres: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        correo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contrasena: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rol: {
            type: DataTypes.STRING
        }
    },
    {
        timestamps: false,
    }
);

export { Cliente };