import { Ppp } from '../models/Ppp.js'

export const find = async (req, res, next) => {
    try {
        let ppp = await Ppp.findByPk(req.params.id);
        if (!ppp) {
            /* si algo pasa debe ser por el return */
            return res.status(404).json({ msg: "La ppp no existe..." });
        } else {
            req.ppp = ppp;
            next();
        }
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

export const getPpps = async (req, res) => {
    try {
        const ppps = await Ppp.findAll();
        res.json(ppps);
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

export const createPpp = async (req, res) => {
    try {
        const { nombre } = req.body;
        if (!nombre) {
            res.status(401).json({ msg: "Ingrese datos correctos..." });
        }
        const newPpp = await Ppp.create({
            nombre
        });
        res.json(newPpp);
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

export const updatePpp = async (req, res) => {
    try {
        const { nombre } = req.body;
        req.ppp.nombre = nombre;
        await req.ppp.save();
        res.json(req.ppp);
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

export const deletePpp = async (req, res) => {
    try {
        let ppp = req.ppp;
        await req.ppp.destroy();
        let msgM = `PPP eliminada con exito, ${ppp.nombre}...`;
        res.json({ msg: msgM });
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

export const getPpp = async (req, res) => {
    res.json(req.ppp);
}