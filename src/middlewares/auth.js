import jwt from 'jsonwebtoken';
import { Usuario } from '../models/Usuario.js';

export const auth = (req, res, next) => {
    if (!req.headers.authorization) {
        res.status(401).json({ msg: "Acceso no autorizado" })
    } else {
        let token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, "secret", (err, decoded) => {
            if (err) {
                res.status(500).json({ msg: "Ha ocurrido un problema en la decodificación del token", err });
            } else {
                Usuario.findByPk(decoded.usuario.id).then(usuario => {
                    req.usuario = usuario;
                });
                next();
            }
        });
    }
}
