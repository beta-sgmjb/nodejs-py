import { DataTypes } from "sequelize";
import { sequelize } from '../db/db.js';

export const UsuarioRol = sequelize.define('usuarioRoles', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    usuarioId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "usuarios",
            key: "id"
        },
        onDelete: "CASCADE"
    },
    rolId: {
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