import { DataTypes, Model } from "sequelize";
import { sequelize } from '../db/db.js';
import { Persona } from "./Persona.js";

export const Supervisor = sequelize.define('supervisores', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cargo: {
        type: DataTypes.STRING
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
    tableName: 'supervisores'
});

Persona.hasOne(Supervisor, {
    foreignKey: {
        name: 'idPersona' 
    },
    sourceKey: 'id'
});

Supervisor.belongsTo(Persona, {
    foreignKey: {
        name: 'idPersona' 
    },
    sourceKey: 'id'
});