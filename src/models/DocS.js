import { DataTypes, Model } from "sequelize";
import { sequelize } from '../db/db.js';
import { Ppp } from "./Ppp.js";

export const DocS = sequelize.define('docSs', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    puntajeFinal: {
        type: DataTypes.INTEGER,
    },
    descripcion: {
        type: DataTypes.STRING,
    },
    actividadEspecialidad: {
        type: DataTypes.STRING,
    },
    url: {
        type: DataTypes.STRING,
        allowNull: true
    },
    tipoEvaluacion: {
        type: DataTypes.CHAR(1),
    },
    estado: {
        type: DataTypes.CHAR(1)
    },
    idPpp: {
        type: DataTypes.INTEGER,
        references: {
            model: Ppp,
            key: "id"
        },
        allowNull: false
    }
}, {
    tableName: 'docSs'
});

Ppp.hasOne(DocS, {
    foreignKey: {
        name: 'idPpp' 
    },
    sourceKey: 'id'
});

DocS.belongsTo(Ppp, {
    foreignKey: {
        name: 'idPpp' 
    },
    sourceKey: 'id'
});