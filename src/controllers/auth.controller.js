import { Usuario } from '../models/Usuario.js';
import { Rol } from '../models/Rol.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const signIn = (req, res) => {
    const { email, password } = req.body;
    Usuario.findOne({
        where: {
            email
        }
    }).then(usuario => {
        if (!usuario) {
            res.status(404).json({ msg: "Usuario no existe..." })
        } else {
            if (bcrypt.compareSync(password, usuario.password)) {
                let token = jwt.sign({ usuario: usuario }, "secret", {
                    expiresIn: "7d"
                });
                Usuario.findOne({
                    include: {
                        model: Rol,
                        as: 'roles'
                    }                  
                }).then(result => {
                    const rolE = result.roles[0].dataValues.rol;
                    const dataUsuario = {
                        id: usuario.id,
                        name: usuario.name,
                        email: usuario.email,
                        password: usuario.password,
                        accessToken: token,
                        rol: rolE
                    }
                    res.send({
                        dataUsuario
                    });
                });

            } else {
                res.status(401).json({ msg: "Contraseña incorrecta..." })
            }
        }
    }).catch(err => {
        res.status(500).json(err);
    });
}

export const signUp = (req, res) => {
    const { name, email, password } = req.body;
    let bPass = bcrypt.hashSync(password, 10);
    Usuario.create({
        name,
        email,
        password: bPass
    }).then(usuario => {
        let token = jwt.sign({ usuario: usuario }, "secret", {
            expiresIn: "7d"
        });
        Usuario.findOne({
            include: {
                model: Rol,
                as: 'roles'
            }                  
        }).then(result => {
            const rolE = result.roles[0].dataValues.rol;
            const dataUsuario = {
                id: usuario.id,
                name: usuario.name,
                email: usuario.email,
                password: usuario.password,
                accessToken: token,
                rol: rolE
            }
            res.send({
                dataUsuario
            });
        });
    }).catch(err => {
        res.status(500).json(err)
    });
}

export const getUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}