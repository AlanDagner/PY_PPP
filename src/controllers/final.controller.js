
import { pool } from '../database'

export const listarFinal = async (req,res)=>{
    try {
        const response = await pool.query('Select *from fc_listar_final()');
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar');
    }
};

export const listarFinalId = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select * from fc_listar_final_id($1)',[id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar por ID');
    }
};


export const crearFinal = async(req,res)=>{
    try {
        const{id_practica, id_documento, path}= req.body;
        await pool.query('select *from fc_crear_final($1, $2, $3)',[id_practica, id_documento, path]);
        return res.status(200).json({
            message:'registrado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al registrar ...!');
    }
};

export const actualizarFinal = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const {id_practica, id_documento, path} = req.body;
        await pool.query('select *from fc_actualizar_final($1, $2, $3, $4) where',[id_practica, id_documento, path, id]);
        return res.status(200).json({
            message:' modificado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al modificar ...!');
    }
};
