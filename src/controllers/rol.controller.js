import { Rol } from '../models/Rol.js';

export const getRoles = async (req, res) => {
    try {
        const rol = await Rol.findAll();
        res.json(rol);
    } catch (error) {
        return res.status(500).json({ msg: error.message }) 
    }
}

export const createRol = async (req, res) => {
    try {
        const { rol } = req.body;
        const newRol = await Rol.create({
            rol
        });
        res.json(newRol);
    } catch (error) {
        return res.status(500).json({ msg: error.message }) 
    }
}