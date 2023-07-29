import { Cliente } from '../Models/clientes.js';
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
     // Extraer el correo y contraseña del cuerpo de la solicitud (request)
    try {
        let { correo, contrasena} = req.body;
        // Buscar un cliente en la base de datos con el correo y contraseña proporcionados
        let cliente = await Cliente.findOne({
            attributes: ['idCliente', 'nombres', 'correo', 'rol'],
            where: {
                correo: correo,
                contrasena: contrasena
            }
        });
        // Comprobar si se encontró un cliente con las credenciales proporcionadas
        if (cliente) {
            // Si se encontró un cliente válido, se procede a generar un token de autenticación
            console.log(cliente);
            let data = JSON.stringify(cliente);
            let token = jwt.sign(data, 'secretKey');
             // Se envía la respuesta al cliente con el token generado
            res.status(200).send({ token });
        } else {
            // Si las credenciales son incorrectas, se envía una respuesta de error
            res.status(401).json({ message: 'Credenciales incorrectas' });
        }
    } catch (error) {
         // Si ocurre un error en el servidor, se envía una respuesta de error
        console.log(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }

}

export const getClientes = async (req, res) => {
    try {
        const clientes = await Cliente.findAll();
        res.status(200).json(clientes);
    } catch (error) {
        res.status(400).json({ mensaje: error });
    }
};

export const getCliente = async (req, res) => {
    const { idCliente } = req.params;
    try {
        const cliente = await Cliente.findOne({
            where: {
                idCliente,
            },
        });
        res.status(200).json(cliente);
    } catch (error) {
        res.status(400).json({ mensaje: error });
    }
};

export const postClientes = async (req, res) => {
    const { nombres, correo, contrasena } = req.body;
    try {
        const newCliente = await Cliente.create({
            nombres,
            correo,
            contrasena,
        });
        res.status(200).json(newCliente);
    } catch (error) {

        res.status(400).json({ mensaje: error });
    }
};


export const putClientes = async (req, res) => {
    const { idCliente } = req.params;
    const { nombres, correo, contrasena } = req.body;
    try {
        const oldCliente = await Cliente.findByPk(idCliente);
        oldCliente.nombres = nombres;
        oldCliente.correo = correo;
        oldCliente.contrasena = contrasena;

        const modCliente = await oldCliente.save();
        res.status(200).json(modCliente);
    } catch (error) {
        res.status(400).json({ mensaje: error });
    }
};

export const deleteClientes = async (req, res) => {
    const { idCliente } = req.params;
    try {
        const respuesta = await Cliente.destroy({
            where: {
                idCliente,
            },
        });
        res.status(200).json({ mensaje: "Registro Eliminado" });
    } catch (error) {

        res.status(400).json({ mensaje: "Registro No Eliminado" + error });
    }
};
