import { DataTypes, Model } from "sequelize";
import { sequelize } from '../db/db.js';
import { Usuario } from "./Usuario.js";

export const Persona = sequelize.define('personas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombres: {
        type: DataTypes.STRING,
        allowNull: true
    },
    apellidoP: {
        type: DataTypes.STRING,
        allowNull: true
    },
    apellidoM: {
        type: DataTypes.STRING,
        allowNull: true
    },
    edad: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    fechaNacimiento: {
        type: DataTypes.DATE,
        allowNull: true
    },
    idUsuario: {
        type: DataTypes.INTEGER,
        references: {
            model: Usuario,
            key: "id"
        },
        allowNull: false
    }
}, {
    tableName: 'personas'
});

Usuario.hasOne(Persona, {
    foreignKey: {
        name: 'idUsuario' 
    },
    sourceKey: 'id'
});

Persona.belongsTo(Usuario, {
    foreignKey: {
        name: 'idUsuario' 
    },
    sourceKey: 'id'
});