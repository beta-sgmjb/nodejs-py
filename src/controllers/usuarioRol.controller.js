import { Rol } from '../models/Rol.js';
import { Usuario } from '../models/Usuario.js';
import { UsuarioRol } from '../models/UsuarioRol.js';

export const getUsuarioRoles = async (req, res) => {
    try {
        const usuarioRol = await UsuarioRol.findAll();
        res.json(usuarioRol);
    } catch (error) {
        return res.status(500).json({ msg: error.message }) 
    }
}

export const createUsuarioRol = async (req, res) => {
    try {
        const { idUsuario, idRol } = req.body;
        const newUsuarioRol = await UsuarioRol.create({
            idUsuario, idRol
        });
        res.json(newUsuarioRol);
    } catch (error) {
        return res.status(500).json({ msg: error.message }) 
    }
}

export const getRoles = async (req, res) => {
    try {
        const { id } = req.params;
        const roles = await  UsuarioRol.findAll({
            where: {
                idUsuario: id
        }});
        res.json(roles);
    } catch (error) {
        return res.status(500).json({ msg: error.message }) 
    }
}