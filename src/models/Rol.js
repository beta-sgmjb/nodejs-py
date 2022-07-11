import { DataTypes } from "sequelize";
import { sequelize } from '../db/db.js';
 
export const Rol = sequelize.define('roles', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    rol: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'roles'
});

Rol.associate = function(models) {
    Rol.belongsToMany(models.Usuario, {
        as: 'usuarios',
        through: 'usuarioRoles',
        foreignKey: 'rolId',
        otherKey: 'usuarioId'
    });
};