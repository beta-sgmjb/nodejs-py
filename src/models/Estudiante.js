import { DataTypes } from "sequelize";
import { sequelize } from '../db/db.js';

export const Estudiante = sequelize.define('estudiante', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
    },
    usuarioId: {
        type: DataTypes.INTEGER,
        references: {
            model: "usuarios",
            key: "id"
        },
        onDelete: "CASCADE"
    }
}, {
    tableName: 'estudiantes'
});

Estudiante.associate = function(models) {
    Estudiante.hasOne(models.Usuario, {
        as: 'usuarios',
        foreignKey: 'usuarioId',
        sourceKey: 'id'
    });
};