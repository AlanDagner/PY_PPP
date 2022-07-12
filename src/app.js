import express from 'express'
import morgan from 'morgan'

import cargoRoutes from './routes/cargo.routes'
import detalle_inicioRoutes from './routes/detalle_inicio.routes'
import detalle_itemRoutes from './routes/detalle_item.routes'
import documentoRoutes from './routes/documento.routes'
import empresa_cargoRoutes from './routes/empresa_cargo.routes'
import empresaRoutes from './routes/empresa.routes'
import estadoRoutes from './routes/estado.routes'
import estudianteRoutes from './routes/estudiante.routes'
import evaluadorRoutes from './routes/evaluador.routes'
import finalRoutes from './routes/final.routes'
import gradoRoutes from './routes/grado.routes'
import inicioRoutes from './routes/inicio.routes'
import item_notaRoutes from './routes/item_nota.routes'
import itemRoutes from './routes/item.routes'
import moduloRoutes from './routes/modulo.routes'
import nivelRoutes from './routes/nivel.routes'
import notaRoutes from './routes/nota.routes'
import personaRoutes from './routes/persona.routes'
import practicaRoutes from './routes/practica.routes'
import privilegioRoutes from './routes/privilegio.routes'
import rol_privilegioRoutes from './routes/rol_privilegio.routes'
import rolRoutes from './routes/rol.routes'
import solicitudRoutes from './routes/solicitud.routes'
import usuario_rolRoutes from './routes/usuario_rol.routes'
import usuariosRoutes from './routes/usuarios.routes'
import visitaRoutes from './routes/visita.routes'



const app=express();
var cors=require('cors');
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.get('/',(req,res)=>{
    res.send('Bienvenido a Node JS...!');

});


app.use('/api/auth/cargo', cargoRoutes);
app.use('/api/auth/detalle_inicio', detalle_inicioRoutes);
app.use('/api/auth/detalle_item', detalle_itemRoutes);
app.use('/api/auth/documento', documentoRoutes);
app.use('/api/auth/empresa_cargo', empresa_cargoRoutes);
app.use('/api/auth/empresa', empresaRoutes);
app.use('/api/auth/estado', estadoRoutes);
app.use('/api/auth/estudiante', estudianteRoutes);
app.use('/api/auth/evaluador', evaluadorRoutes);
app.use('/api/auth/final', finalRoutes);
app.use('/api/auth/grado', gradoRoutes);
app.use('/api/auth/inicio', inicioRoutes);
app.use('/api/auth/item_nota', item_notaRoutes);
app.use('/api/auth/item', itemRoutes);
app.use('/api/auth/modulo', moduloRoutes);
app.use('/api/auth/nivel', nivelRoutes);
app.use('/api/auth/nota', notaRoutes);
app.use('/api/auth/persona', personaRoutes);
app.use('/api/auth/practica', practicaRoutes);
app.use('/api/auth/privilegio', privilegioRoutes);
app.use('/api/auth/rol_privilegio', rol_privilegioRoutes);
app.use('/api/auth/rol', rolRoutes);
app.use('/api/auth/solicitud', solicitudRoutes);
app.use('/api/auth/usuario_rol', usuario_rolRoutes);
app.use('/api/auth/usuarios', usuariosRoutes);
app.use('/api/auth/visita', visitaRoutes);


export default app;