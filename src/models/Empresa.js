import { DataTypes, Model } from "sequelize";
import { sequelize } from '../db/db.js';
import { TipoEmpresa } from "./TipoEmpresa.js";

export const Empresa = sequelize.define('empresas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    empresa: {
        type: DataTypes.STRING,
    },
    direccion: {
        type: DataTypes.STRING,
    },
    representante: {
        type: DataTypes.STRING,
    },
    numeroContacto: {
        type: DataTypes.STRING(15),
    },
    ruc: {
        type: DataTypes.STRING(11),
    },
    sector: {
        type: DataTypes.STRING,
    },
    acceso: {
        type: DataTypes.CHAR(1),
    },
    estado: {
        type: DataTypes.CHAR(1)
    },
    idTipoEmpresa: {
        type: DataTypes.INTEGER,
        references: {
            model: TipoEmpresa,
            key: "id"
        },
        allowNull: false
    }
}, {
    tableName: 'empresas'
});

TipoEmpresa.hasOne(Empresa, {
    foreignKey: {
        name: 'idTipoEmpresa' 
    },
    sourceKey: 'id'
});

Empresa.belongsTo(TipoEmpresa, {
    foreignKey: {
        name: 'idTipoEmpresa' 
    },
    sourceKey: 'id'
});