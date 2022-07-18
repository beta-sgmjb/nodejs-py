import { verificarRol } from "../models/Usuario.js";

export const showPppRule = (req, res, next) => {
    if (req.usuario.id === req.ppp.idEstudiante || verificarRol(req.usuario.roles) == "1") {
        next();
    } else {
        res.status(403).json({ msg: "No estas autorizado para ver la ppp..." });
    }
}