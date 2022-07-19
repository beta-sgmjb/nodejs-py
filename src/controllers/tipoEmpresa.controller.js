import { TipoEmpresa } from '../models/TipoEmpresa.js';

export const findTipoEmpresa = async (req, res, next) => {
    try {
        let tipoEmpresa = await TipoEmpresa.findByPk(req.params.id);
        if (!tipoEmpresa) {
            /* si algo pasa debe ser por el return */
            return res.status(404).json({ msg: "La ppp no existe..." });
        } else {
            req.tipoEmpresa = tipoEmpresa;
            next();
        }
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

export const getTipoEmpresas = async (req, res) => {
    try {
        const tipoEmpresas = await TipoEmpresa.findAll();
        res.json(tipoEmpresas);
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

export const createTipoEmpresa = async (req, res) => {
    try {
        const { tipo } = req.body;
        if (!tipo) {
            res.status(401).json({ msg: "Ingrese datos correctos..." });
        }
        const newTipoEmpresa = await TipoEmpresa.create({
            tipo
        });
        res.json(newTipoEmpresa);
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

export const updateTipoEmpresa = async (req, res) => {
    try {
        const { tipo } = req.body;
        req.tipoEmpresa.tipo = tipo;
        await req.tipoEmpresa.save();
        res.json(req.tipoEmpresa);
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

export const deleteTipoEmpresa = async (req, res) => {
    try {
        let tipoEmpresa = req.tipoEmpresa;
        await req.tipoEmpresa.destroy();
        let msgM = `Tipo eliminado con exito, ${tipoEmpresa.tipo}...`;
        res.json({ msg: msgM });
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

export const getTipoEmpresa = async (req, res) => {
    res.json(req.tipoEmpresa);
}
