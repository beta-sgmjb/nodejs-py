import { Ppp } from '../models/Ppp.js'

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

export const deletePpp = async (req, res) => {
    try {
        const { id } = req.params;
        await Ppp.destroy({
            where: {
                id
            }
        });
        res.send(204);
    } catch (error) {
        return res.status(500).json({ msg: error.message }) 
    }
}

export const getPpp = async (req, res) => {
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