import { DataTypes } from "sequelize";
import { sequelize } from '../db/db.js';
import { Usuario } from "./Usuario.js";
 
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

Rol.belongsToMany(Usuario, {
    as: 'usuarios',
    through: 'usuarioRoles',
    foreignKey: 'idRol',
    otherKey: 'idUsuario'
});

Usuario.belongsToMany(Rol, {
    as: 'roles',
    through: 'usuarioRoles',
    foreignKey: 'idUsuario',
    otherKey: 'idRol'
});
