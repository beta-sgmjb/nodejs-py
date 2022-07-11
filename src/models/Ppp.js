import { DataTypes } from "sequelize";
import { sequelize } from '../db/db.js';

export const Ppp = sequelize.define('ppp', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
    }
}, {
    tableName: 'ppps'
});