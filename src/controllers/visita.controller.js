
import { pool } from '../database'

export const listarVisita = async (req,res)=>{
    try {
        const response = await pool.query('Select *from fc_listar_visita()');
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar');
    }
};

export const listarVisitaId = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select * from fc_listar_visita_id($1)',[id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar por ID');
    }
};


export const crearVisita = async(req,res)=>{
    try {
        const{id_practica, fecha, id_evaluador, id_estado}= req.body;
        await pool.query('select *from fc_crear_visita($1, $2, $3, $4)',[id_practica, fecha, id_evaluador, id_estado]);
        return res.status(200).json({
            message:'registrado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al registrar ...!');
    }
};

export const actualizarVisita = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const {id_practica, fecha, id_evaluador, id_estado} = req.body;
        await pool.query('select *from fc_actualizar_visita($1, $2, $3, $4, $5)',[id_practica, fecha, id_evaluador, id_estado, id]);
        return res.status(200).json({
            message:' modificado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al modificar ...!');
    }
};
