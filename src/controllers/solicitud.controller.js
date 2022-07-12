
import { pool } from '../database'

export const listarSolicitud = async (req,res)=>{
    try {
        const response = await pool.query('SELECT e.nombre, es.codigo, s.estado_solicitud, es.ciclo, p.nombre, p.ape_paterno, p.ape_materno FROM solicitud s, empresa e, estudiante es, persona p  where s.id_empresa = e.id_empresa AND s.id_estudiante = es.id_estudiante and es.id_persona = p.id_persona');
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar solicitudes');
    }
};


export const listarSolicitudId = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select * from fc_listar_solicitud_id($1)',[id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar solicitud');
    }
};

export const crearSolicitud = async(req,res)=>{
    try {
        const{estado_solicitud, id_empresa, id_estudiante}= req.body;
        await pool.query('select *from fc_crear_solicitud($1, $2, $3)',[estado_solicitud, id_empresa, id_estudiante]);
        return res.status(200).json({
            message:'Solicitud registrado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al registrar solicitud ...!');
    }
};

export const actualizarSolicitud = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const {estado_solicitud, id_empresa, id_estudiante} = req.body;
        await pool.query('select *from fc_actualizar_solicitud($1, $2, $3, $4)',[estado_solicitud, id_empresa, id_estudiante, id]);
        return res.status(200).json({
            message:'La Solicitud se a modificado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al modificar solicitud ...!');
    }
};

export const eliminarSolicitud = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const {estado} = req.body;
        await pool.query('select *from fc_eliminar_solicitud($1, $2)',[estado, id]);
        return res.status(200).json({
            message:'La Solicitud se a eliminado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al eliminar solicitud ...!');
    }
};

export const recuperarSolicitud = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const {estado} = req.body;
        await pool.query('select *from fc_recuperar_solicitud($1, $2)',[estado, id]);
        return res.status(200).json({
            message:'La Solicitud se a eliminado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al eliminar solicitud ...!');
    }
};
