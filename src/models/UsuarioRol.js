import { DataTypes } from "sequelize";
import { sequelize } from '../db/db.js';
import { Rol } from "./Rol.js";
import { Usuario } from "./Usuario.js";

export const UsuarioRol = sequelize.define('usuarioRoles', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Usuario,
            key: "id"
        },
        onDelete: "CASCADE"
    },
    idRol: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Rol,
            key: "id"
        },
        onDelete: "CASCADE"
    }
}, {
    tableName: 'usuarioRoles'
});

Usuario.belongsToMany(Rol, {
    through: 'usuarioRoles',
    foreignKey: 'idUsuario',
    otherKey: 'idRol'
});

Rol.belongsToMany(Usuario, {
    through: 'usuarioRoles',
    foreignKey: 'idRol',
    otherKey: 'idUsuario'
});