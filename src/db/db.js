import Sequelize from "sequelize";

export const sequelize = new Sequelize('dbpy', 'postgres', '123456', {
    host: 'localhost',
    dialect: 'postgres'
});