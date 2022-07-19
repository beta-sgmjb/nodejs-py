import { DocF } from '../models/DocF.js';

export const findDocF = async (req, res, next) => {
    try {
        let docF = await DocF.findByPk(req.params.id);
        if (!docF) {
            /* si algo pasa debe ser por el return */
            return res.status(404).json({ msg: "La ppp no existe..." });
        } else {
            req.docF = docF;
            next();
        }
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

export const getDocFs = async (req, res) => {
    try {
        const docFs = await DocF.findAll();
        res.json(docFs);
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

export const createDocF = async (req, res) => {
    try {
        const { url, tipoDocumento, estado, idPpp } = req.body;
        if (!idPpp) {
            res.status(401).json({ msg: "Ingrese datos correctos..." });
        }
        const newDocF = await DocF.create({
            url, tipoDocumento, estado, idPpp
        });
        res.json(newDocF);
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

export const updateDocF = async (req, res) => {
    try {
        const { url, tipoDocumento, estado, idPpp } = req.body;
        req.docF.url = url;
        req.docF.tipoDocumento = tipoDocumento;
        req.docF.estado = estado;
        req.docF.idPpp = idPpp;
        await req.docF.save();
        res.json(req.docF);
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

export const deleteDocF = async (req, res) => {
    try {
        let docF = req.docF;
        await req.docF.destroy();
        let msgM = `Tipo eliminado con exito, ${docF.tipoDocumento}...`;
        res.json({ msg: msgM });
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

export const getDocF = async (req, res) => {
    res.json(req.docF);
}
