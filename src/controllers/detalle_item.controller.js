
import { pool } from '../database'

export const listarDetalle_item = async (req,res)=>{
    try {
        const response = await pool.query('Select *from fc_listar_detalle_item()');
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar');
    }
};

export const listarDetalle_item_Id = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select * from fc_listar_detalle_item_id($1)',[id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar por ID');
    }
};


export const crearDetalle_item = async(req,res)=>{
    try {
        const{id_item, nombre, id_nivel}= req.body;
        await pool.query('select *from fc_crear_detalle_item($1, $2, $3)',[id_item, nombre, id_nivel]);
        return res.status(200).json({
            message:'registrado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al registrar ...!');
    }
};

export const actualizarDetalle_item = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const {id_item, nombre, id_nivel} = req.body;
        await pool.query('select *from fc_actualizar_detalle_item($1, $2, $3, $4)',[id_item, nombre, id_nivel, id]);
        return res.status(200).json({
            message:' modificado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al modificar ...!');
    }
};
