import { DataTypes } from "sequelize";
import { sequelize } from '../db/db.js';
import { Rol } from "./Rol.js";
import { Usuario } from "./Usuario.js";

export const UsuarioRol = sequelize.define('usuarioRoles', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
/*     usuarioId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "usuarios",
            key: "id"
        },
        onDelete: "CASCADE"
    },
    rolId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "roles",
            key: "id"
        },
        onDelete: "CASCADE"
    } */
}, {
    tableName: 'usuarioRoles'
});

/* UsuarioRol.associate = function(models) {
    Rol.belongsToMany(models.Usuario, {
        as: 'usuarios',
        through: 'usuarioRoles',
        foreignKey: 'rolId',
        otherKey: 'usuarioId'
    })
    
    Usuario.belongsToMany(models.Rol, {
        as: 'roles',
        through: 'usuarioRoles',
        foreignKey: 'usuarioId',
        otherKey: 'rolId'
    })
}
 */
UsuarioRol.associate = function(models) {
    Usuario.belongsToMany(models.Rol, { through: UsuarioRol });
    Rol.belongsToMany(models.Usuario, { through: UsuarioRol });
}
