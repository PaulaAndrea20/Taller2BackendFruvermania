import { DataTypes } from "sequelize";
import { sequelize } from "../Database/database.js";

const Compras = sequelize.define(
    "compras",
    {
        // Definicion de Atributos
        idCompra: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        idProducto: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idCliente: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cantidad: {
            type: DataTypes.INTEGER,
        },
        fechaSolicitud: {
            type: DataTypes.DATE
        },
        estado: {
            type: DataTypes.INTEGER
        },
    },
    {
        timestamps: false,
    }
);

export { Compras };