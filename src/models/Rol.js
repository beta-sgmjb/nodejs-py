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

