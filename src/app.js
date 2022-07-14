import express from 'express';
import pppRoutes from './routes/ppp.routes.js';
import usuarioRoutes from './routes/usuario.routes.js';
import estudianteRoutes from './routes/estudiante.routes.js'
import rolRoutes from './routes/rol.routes.js';
import usuarioRolRoutes from './routes/usuarioRoles.routes.js';

const app = express();

app.use(express.json());

app.use(pppRoutes);
app.use(usuarioRoutes);
app.use(estudianteRoutes);
app.use(rolRoutes);
app.use(usuarioRolRoutes);

export default app;