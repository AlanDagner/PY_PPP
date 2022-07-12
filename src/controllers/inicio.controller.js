
import { pool } from '../database'

export const listarInicio = async (req,res)=>{
    try {
        const response = await pool.query('Select *from fc_listar_inicio()');
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar');
    }
};

export const listarInicioId = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select * from fc_listar_inicio_id($1)',[id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar por ID');
    }
};


export const crearInicio = async(req,res)=>{
    try {
        const{id_solicitud, estado}= req.body;
        await pool.query('select *from fc_crear_inicio($1, $2)',[id_solicitud, estado]);
        return res.status(200).json({
            message:'registrado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al registrar ...!');
    }
};

export const actualizarInicio = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const {id_solicitud, estado} = req.body;
        await pool.query('select *from fc_actualizar_inicio($1, $2, $3)',[id_solicitud, estado, id]);
        return res.status(200).json({
            message:' modificado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al modificar ...!');
    }
};