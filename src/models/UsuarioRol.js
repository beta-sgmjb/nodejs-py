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
            model: "usuarios",
            key: "id"
        },
        onDelete: "CASCADE"
    },
    idRol: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "roles",
            key: "id"
        },
        onDelete: "CASCADE"
    }
}, {
    tableName: 'usuarioRoles'
});