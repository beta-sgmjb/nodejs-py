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
    estado: {
        type: DataTypes.CHAR(1)
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
    tableName: 'estudiantes'
});

Usuario.hasOne(Estudiante, {
    as: 'usuario',
    foreignKey: {
        name: 'idUsuario' 
    },
    sourceKey: 'id'
});

Estudiante.belongsTo(Usuario, {
    as: 'estudiante',
    foreignKey: {
        name: 'idUsuario' 
    },
    sourceKey: 'id'
});