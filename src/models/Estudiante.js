import { DataTypes, Model } from "sequelize";
import { sequelize } from '../db/db.js';
import { Persona } from "./Persona.js";

export const Estudiante = sequelize.define('estudiantes', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ciclo: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    carreraProfesional: {
        type: DataTypes.STRING,
        allowNull: true
    },
    estado: {
        type: DataTypes.CHAR(1),
        allowNull: true
    },
    idPersona: {
        type: DataTypes.INTEGER,
        references: {
            model: Persona,
            key: "id"
        },
        allowNull: false
    }
}, {
    tableName: 'estudiantes'
});

Persona.hasOne(Estudiante, {
    foreignKey: {
        name: 'idPersona' 
    },
    sourceKey: 'id'
});

Estudiante.belongsTo(Persona, {
    foreignKey: {
        name: 'idPersona' 
    },
    sourceKey: 'id'
});