
import { pool } from '../database'

export const listarDetalle_inicio = async (req,res)=>{
    try {
        const response = await pool.query('Select *from fc_listar_detalle_inicio()');
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar');
    }
};

export const listarDetalle_inicioId = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select * from fc_listar_detalle_inicio_id($1)',[id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar por ID');
    }
};


export const crearDetalle_inicio = async(req,res)=>{
    try {
        const{id_inicio_doc, id_documento, path}= req.body;
        await pool.query('select *from fc_crear_detalle_inicio($1, $2, $3)',[id_inicio_doc, id_documento, path]);
        return res.status(200).json({
            message:'registrado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al registrar ...!');
    }
};

export const actualizarDetalle_inicio = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const {id_inicio_doc, id_documento, path} = req.body;
        await pool.query('select *from fc_actualizar_detalle_inicio($1, $2, $3, $4)',[id_inicio_doc, id_documento, path, id]);
        return res.status(200).json({
            message:' modificado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al modificar ...!');
    }
};
