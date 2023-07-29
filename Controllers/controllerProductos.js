//Parte Logica de la Aplicación

//Importar el modelo productos
import { Producto } from '../Models/productos.js';

//Función para obtener los productos
export const getProductos = async (req, res) => {
    try {
        //recibe los datos del modelo producto
        const productos = await Producto.findAll();
        res.status(200).json(productos);
    } catch (error) {
        res.status(400).json({ mensaje: error });
    }
};

//Función para obtener un productos por el id
export const getProducto = async (req, res) => {
    const { idProducto } = req.params;
    try {
        const producto = await Producto.findByPk(idProducto);
        res.status(200).json(producto);
    } catch (error) {
        res.status(400).json({ mensaje: error });
    }
};

//Función para agregar un producto
export const postProductos = async (req, res) => {
    const { nombre, detalle, precio } = req.body;
    try {
        const newProducto = await Producto.create({
            nombre,
            detalle,
            precio,
        });
        res.status(200).json(newProducto);
    } catch (error) {
        res.status(400).json({ mensaje: error });
    }
};

//Función para actualizar un producto por el id
export const putProductos = async (req, res) => {
    const { idProducto } = req.params;
    const { nombre, detalle, precio } = req.body;
    try {
        const oldProducto = await Producto.findByPk(idProducto);
        oldProducto.nombre = nombre;
        oldProducto.detalle = detalle;
        oldProducto.precio = precio;
        const modProducto = await oldProducto.save();
        res.status(200).json(modProducto);
    } catch (error) {
        res.status(400).json({ mensaje: error });
    }
};

//Función para eliminar un producto por el id
export const deleteProductos = async (req, res) => {
    const { idProducto } = req.params;
    try {
        const respuesta = await Producto.destroy({
            where: {
                idProducto,
            },
        });
        res.status(200).json({ mensaje: "Registro Eliminado" });
    } catch (error) {
        res.status(400).json({ mensaje: "Registro No Eliminado" + error });
    }
};