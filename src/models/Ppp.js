import { DataTypes } from "sequelize";
import { sequelize } from '../db/db.js';
import { Estudiante } from "./Estudiante.js";

export const Ppp = sequelize.define('ppps', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
    },
    idEstudiante: {
        type: DataTypes.INTEGER,
        references: {
            model: Estudiante,
            key: "id"
        },
        allowNull: false
    }
}, {
    tableName: 'ppps'
});

Estudiante.hasOne(Ppp, {
    foreignKey: {
        name: 'idEstudiante' 
    },
    sourceKey: 'id'
});

Ppp.belongsTo(Estudiante, {
    foreignKey: {
        name: 'idEstudiante' 
    },
    sourceKey: 'id'
});