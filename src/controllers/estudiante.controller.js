import { Estudiante } from '../models/Estudiante.js';

export const findEstudiante = async (req, res, next) => {
    try {
        let estudiante = await Estudiante.findByPk(req.params.id);
        if (!estudiante) {
            /* si algo pasa debe ser por el return */
            return res.status(404).json({ msg: "La ppp no existe..." });
        } else {
            req.estudiante = estudiante;
            next();
        }
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

export const getEstudiantes = async (req, res) => {
    try {
        const estudiantes = await Estudiante.findAll();
        res.json(estudiantes);
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

export const createEstudiante = async (req, res) => {
    try {
        const { ciclo, carreraProfesional, estado, idPersona } = req.body;
        if (!idPersona) {
            res.status(401).json({ msg: "Ingrese datos correctos..." });
        }
        const newEstudiante = await Estudiante.create({
            ciclo, carreraProfesional, estado, idPersona
        });
        res.json(newEstudiante);
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

export const updateEstudiante = async (req, res) => {
    try {
        const { ciclo, carreraProfesional, estado, idPersona } = req.body;
        req.estudiante.ciclo = ciclo;
        req.estudiante.carreraProfesional = carreraProfesional;
        req.estudiante.estado = estado;
        req.estudiante.idPersona = idPersona;
        await req.estudiante.save();
        res.json(req.estudiante);
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

export const deleteEstudiante = async (req, res) => {
    try {
        let estudiante = req.estudiante;
        await req.estudiante.destroy();
        let msgM = `Tipo eliminado con exito, ${estudiante.estado}...`;
        res.json({ msg: msgM });
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

export const getEstudiante = async (req, res) => {
    res.json(req.estudiante);
}
