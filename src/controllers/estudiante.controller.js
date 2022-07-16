import { Estudiante } from '../models/Estudiante.js'
import { Usuario } from '../models/Usuario.js';

export const getEstudiantes = async (req, res) => {
    try {
        const estudiantes = await Estudiante.findAll();
        res.json(estudiantes)
    } catch (error) {
        return res.status(500).json({ msg: error.message }) 
    }
}

export const createEstudiante = async (req, res) => {
    try {
        const { nombre, estado } = req.body;
        const idUser = await Usuario.max('id');
        console.log(idUser);
        const newEstudiante = await Estudiante.create({
            nombre,
            estado,
            idUsuario: idUser
        });
        res.json(newEstudiante);
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
}

export const updateEstudiante = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre } = req.body;
        const ppp = await Ppp.findByPk(id);

        ppp.nombre = nombre

        await ppp.save();
        res.json(ppp);
    } catch (error) {
        return res.status(500).json({ msg: error.message }) 
    }
}

export const deleteEstudiante = async (req, res) => {
    try {
        const { id } = req.params;
        await Estudiante.destroy({
            where: {
                id
            }
        });
        res.send(204);
    } catch (error) {
        return res.status(500).json({ msg: error.message }) 
    }
}

export const getEstudiante = async (req, res) => {
    try {
        const { id } = req.params;
        const ppp = await Ppp.findOne({
            where: {
                id
            }
        });
        if (!ppp) return res.status(404).json({ msg: 'La ppp no existe...' }) 
        res.json(ppp);
    } catch (error) {
        return res.status(500).json({ msg: error.message }) 
    }
}