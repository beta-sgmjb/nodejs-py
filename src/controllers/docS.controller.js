import { DocF } from '../models/DocF.js';
import { DocS } from '../models/DocS.js';
export const findDocF = async (req, res, next) => {
    try {
        let docS = await DocS.findByPk(req.params.id);
        if (!docS) {
            /* si algo pasa debe ser por el return */
            return res.status(404).json({ msg: "La ppp no existe..." });
        } else {
            req.docS = docS;
            next();
        }
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

export const getDocSs = async (req, res) => {
    try {
        const docSs = await DocS.findAll();
        res.json(docSs);
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

export const createDocS = async (req, res) => {
    try {
        const { puntajeFinal, descripcion, actividadEspecialidad, url, tipoEvaluacion, estado, idPpp } = req.body;
        if (!idPpp) {
            res.status(401).json({ msg: "Ingrese datos correctos..." });
        }
        const newDocS = await DocS.create({
            puntajeFinal, descripcion, actividadEspecialidad, url, tipoEvaluacion, estado, idPpp
        });
        res.json(newDocS);
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

export const updateDocS = async (req, res) => {
    try {
        const { puntajeFinal, descripcion, actividadEspecialidad, url, tipoEvaluacion, estado, idPpp } = req.body;
        req.docS.puntajeFinal = puntajeFinal;
        req.docS.descripcion = descripcion;
        req.docS.actividadEspecialidad = actividadEspecialidad;
        req.docS.url = url;
        req.docS.tipoEvaluacion = tipoEvaluacion;
        req.docS.estado = estado;
        req.docS.idPpp = idPpp;
        await req.docS.save();
        res.json(req.docS);
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

export const deleteDocS = async (req, res) => {
    try {
        let docS = req.docS;
        await req.docS.destroy();
        let msgM = `Tipo eliminado con exito, ${docS.descripcion}...`;
        res.json({ msg: msgM });
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

export const getDocS = async (req, res) => {
    res.json(req.docS);
}