export const showPppRule = (req, res, next) => {
    if (req.usuario.id === req.ppp.idEstudiante) {
        next();
    } else {
        res.status(403).json({ msg: "No estas autorizado para ver la ppp..." });
    }
}