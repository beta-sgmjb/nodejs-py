import { DataTypes, Model } from "sequelize";
import { sequelize } from '../db/db.js';
import { Usuario } from "./Usuario.js";

export const Estudiante = sequelize.define('estudiantes', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
    },
    idUsuario: {
        type: DataTypes.INTEGER,
        references: {
            model: "usuarios",
            key: "id"
        },
        allowNull: true
    }
}, {
    tableName: 'estudiantes'
});