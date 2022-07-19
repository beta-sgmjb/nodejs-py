import { Persona } from '../models/Persona.js';

export const findPersona = async (req, res, next) => {
    try {
        let persona = await Persona.findByPk(req.params.id);
        if (!persona) {
            /* si algo pasa debe ser por el return */
            return res.status(404).json({ msg: "La ppp no existe..." });
        } else {
            req.persona = persona;
            next();
        }
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

export const getPersonas = async (req, res) => {
    try {
        const personas = await Persona.findAll();
        res.json(personas);
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

export const createPersona = async (req, res) => {
    try {
        const { nombres, apellidoP, apellidoM, edad, fechaNacimiento, idUsuario } = req.body;
        if (!idUsuario) {
            res.status(401).json({ msg: "Ingrese datos correctos..." });
        }
        const newPersona = await Persona.create({
            nombres, apellidoP, apellidoM, edad, fechaNacimiento, idUsuario
        });
        res.json(newPersona);
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

export const updatePersona = async (req, res) => {
    try {
        const { nombres, apellidoP, apellidoM, edad, fechaNacimiento, idUsuario } = req.body;
        req.persona.nombres = nombres;
        req.persona.apellidoP = apellidoP;
        req.persona.apellidoM = apellidoM;
        req.persona.edad = edad;
        req.persona.fechaNacimiento = fechaNacimiento;
        req.persona.idUsuario = idUsuario;
        await req.persona.save();
        res.json(req.persona);
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

export const deletePersona = async (req, res) => {
    try {
        let persona = req.persona;
        await req.persona.destroy();
        let msgM = `Tipo eliminado con exito, ${persona.tipo}...`;
        res.json({ msg: msgM });
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

export const getPersona = async (req, res) => {
    res.json(req.persona);
}
