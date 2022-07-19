import { Empresa } from '../models/Empresa.js';

export const findEmpresa = async (req, res, next) => {
    try {
        let empresa = await Empresa.findByPk(req.params.id);
        if (!empresa) {
            /* si algo pasa debe ser por el return */
            return res.status(404).json({ msg: "La empresa no existe..." });
        } else {
            req.empresa = empresa;
            next();
        }
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

export const getEmpresas = async (req, res) => {
    try {
        const empresas = await Empresa.findAll();
        res.json(empresas);
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

export const createEmpresa = async (req, res) => {
    try {
        const { empresa, direccion, representante, numeroContacto, ruc, sector, acceso, estado, idTipoEmpresa } = req.body;
        if (!idTipoEmpresa) {
            res.status(401).json({ msg: "Ingrese datos correctos..." });
        }
        const newEmpresa = await Empresa.create({
            empresa, direccion, representante, numeroContacto, ruc, sector, acceso, estado, idTipoEmpresa
        });
        res.json(newEmpresa);
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

export const updateEmpresa = async (req, res) => {
    try {
        const { empresa, direccion, representante, numeroContacto, ruc, sector, acceso, estado, idTipoEmpresa } = req.body;
        req.empresa.empresa = empresa;
        req.empresa.direccion = direccion;
        req.empresa.representante = representante;
        req.empresa.numeroContacto = numeroContacto;
        req.empresa.ruc = ruc;
        req.empresa.sector = sector;
        req.empresa.acceso = acceso;
        req.empresa.estado = estado;
        req.empresa.idTipoEmpresa = idTipoEmpresa;
        await req.empresa.save();
        res.json(req.empresa);
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

export const deleteEmpresa = async (req, res) => {
    try {
        let empresa = req.empresa;
        await req.empresa.destroy();
        let msgM = `Empresa eliminado con exito, ${empresa.empresa}...`;
        res.json({ msg: msgM });
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

export const getEmpresa = async (req, res) => {
    res.json(req.empresa);
}
