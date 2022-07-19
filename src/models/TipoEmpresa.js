import { DataTypes, Model } from "sequelize";
import { sequelize } from '../db/db.js';

export const TipoEmpresa = sequelize.define('tipoEmpresas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipo: {
        type: DataTypes.STRING,
    }
}, {
    tableName: 'tipoEmpresas'
});