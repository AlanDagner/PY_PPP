
import { pool } from '../database'

export const listarEstado= async (req,res)=>{
    try {
        const response = await pool.query('Select *from fc_listar_estado()');
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar');
    }
};

export const listarEstadoId = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select * from fc_listar_estado_id($1)',[id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar por ID');
    }
};


export const crearEstado = async(req,res)=>{
    try {
        const{nombre}= req.body;
        await pool.query('select *from fc_crear_estado($1)',[nombre]);
        return res.status(200).json({
            message:'registrado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al registrar ...!');
    }
};

export const actualizarEstado = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const {nombre} = req.body;
        await pool.query('select *from fc_actualizar_estado($1, $2)',[nombre, id]);
        return res.status(200).json({
            message:' modificado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al modificar ...!');
    }
};
