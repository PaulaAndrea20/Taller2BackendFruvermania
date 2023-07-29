//Importar el modelo compras
import { Compras } from '../Models/compras.js';

export const getCompras = async (req, res) => {
    try {
        const compras = await Compras.findAll();
        res.status(200).json(compras);
    } catch (error) {
        res.status(400).json({ mensaje: error });
    }
};

export const postCompras = async (req, res) => {
    const { idCliente, idProducto, cantidad } = req.body;
    try {
        const newCompra = await Compras.create({
            idCliente,
            idProducto,
            cantidad
        });
        res.status(200).json(newCompra);
    } catch (error) {

        res.status(400).json({ mensaje: error });
    }
};

export const putCompras = async (req, res) => {
    const { idCompra } = req.params;
    const { idCliente, idProducto, cantidad, estado } = req.body;
    try {
        const oldCompra = await Compras.findByPk(idCompra);
        oldCompra.idCliente = idCliente;
        oldCompra.idProducto = idProducto;
        oldCompra.cantidad = cantidad;
        oldCompra.estado = estado;

        const modCompra = await oldCompra.save();
        res.status(200).json(modCompra);
    } catch (error) {
        console.log(error);
        res.status(400).json({ mensaje: error });
    }
};


export const deleteCompras = async (req, res) => {
    const { idCompra } = req.params;
    try {
        const respuesta = await Compras.destroy({
            where: {
                idCompra,
            },
        });

        res.status(200).json({ mensaje: "Registro Eliminado" });
    } catch (error) {

        res.status(400).json({ mensaje: "Registro No Eliminado" + error });
    }
};
