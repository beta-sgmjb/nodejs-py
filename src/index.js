import app from "./app.js";
import { sequelize } from './db/db.js';
import './models/Usuario.js';
import './models/Ppp.js';
import './models/Estudiante.js';
import './models/Persona.js';
import './models/Empresa.js';
import './models/TipoEmpresa.js';
import './models/Supervisor.js';
import './models/DocF.js';
import './models/DocS.js';

async function main() {
    try {
        await sequelize.sync({ force: false });
        console.log('Conexión a base de datos...');
        app.listen(4000);
        console.log('Servidor corriendo en el puerto 4000...');
    } catch (error) {
        console.error("No se pudo conectar a la base de datos...");
    }
}

main();