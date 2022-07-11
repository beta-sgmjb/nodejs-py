import { DataTypes } from "sequelize";
import { sequelize } from '../db/db.js';
import { UsuarioRol } from './UsuarioRol.js';
 
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
        through: UsuarioRol,
        foreignKey: 'rolId',
        otherKey: 'usuarioId'
    });
    UsuarioRol.associate = function(models) {
        Usuario.belongsToMany(models.Rol, { through: UsuarioRol });
        Rol.belongsToMany(models.Usuario, { through: UsuarioRol });
    }
    
};