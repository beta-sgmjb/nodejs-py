import { DataTypes, Model } from "sequelize";
import { sequelize } from '../db/db.js';
import { Ppp } from "./Ppp.js";

export const DocF = sequelize.define('docFs', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    url: {
        type: DataTypes.STRING,
        allowNull: true
    },
    tipoDocumento: {
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
    tableName: 'docFs'
});

Ppp.hasOne(DocF, {
    foreignKey: {
        name: 'idPpp' 
    },
    sourceKey: 'id'
});

DocF.belongsTo(Ppp, {
    foreignKey: {
        name: 'idPpp' 
    },
    sourceKey: 'id'
});