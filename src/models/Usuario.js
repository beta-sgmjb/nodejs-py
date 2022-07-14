import { DataTypes, Model } from "sequelize";
import { sequelize } from '../db/db.js';
import { Estudiante } from "./Estudiante.js";
import { Rol } from "./Rol.js";

export const Usuario = sequelize.define('usuarios', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlpha: {
                msg: "El nombre solo puede contener letras"
            },
            len: {
                args: [4, 255],
                msg: "El nombre tiene que tener mínimo 4 caracteres"
            }
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: {
                msg: "El email tiene que ser un correo valido"
            }
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [6, 255],
                msg: "La contraseña tiene que tener mínimo 6 caracteres"
            }
        }
    }
}, {
    tableName: 'usuarios'
});
Usuario.hasOne(Estudiante, {
    as: 'usuarios',
    foreignKey: {
        name: 'idUsuario' 
    },
    sourceKey: 'id'
});

Estudiante.belongsTo(Usuario, {
    as: 'estudiantes',
    foreignKey: {
        name: 'idUsuario' 
    },
    sourceKey: 'id'
});