import { Supervisor } from '../models/Supervisor.js';

export const findSupervisor = async (req, res, next) => {
    try {
        let supervisor = await Supervisor.findByPk(req.params.id);
        if (!supervisor) {
            /* si algo pasa debe ser por el return */
            return res.status(404).json({ msg: "La ppp no existe..." });
        } else {
            req.supervisor = supervisor;
            next();
        }
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

export const getSupervisores = async (req, res) => {
    try {
        const supervisores = await Supervisor.findAll();
        res.json(supervisores);
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

export const createSupervisor = async (req, res) => {
    try {
        const { cargo, idPersona } = req.body;
        if (!cargo) {
            res.status(401).json({ msg: "Ingrese datos correctos..." });
        }
        const newSupervisor = await Supervisor.create({
            cargo, idPersona
        });
        res.json(newSupervisor);
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

export const updateSupervisor = async (req, res) => {
    try {
        const { cargo, idPersona } = req.body;
        req.supervisor.cargo = cargo;
        req.supervisor.idPersona = idPersona;
        await req.supervisor.save();
        res.json(req.supervisor);
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

export const deleteSupervisor = async (req, res) => {
    try {
        let supervisor = req.supervisor;
        await req.supervisor.destroy();
        let msgM = `Tipo eliminado con exito, ${supervisor.cargo}...`;
        res.json({ msg: msgM });
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

export const getSupervisor = async (req, res) => {
    res.json(req.supervisor);
}
