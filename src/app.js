import express from 'express';
import pppRoutes from './routes/ppp.routes.js';
import personaRoutes from './routes/persona.routes.js';
import usuarioRoutes from './routes/usuario.routes.js';
import estudianteRoutes from './routes/estudiante.routes.js'
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.use(pppRoutes);
app.use(usuarioRoutes);
app.use(personaRoutes);
app.use(estudianteRoutes);

export default app;