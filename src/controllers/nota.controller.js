
import { pool } from '../database'

export const listarNota = async (req,res)=>{
    try {
        const response = await pool.query('Select *from fc_listar_nota()');
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar');
    }
};

export const listarNotaId = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select * from fc_listar_nota_id($1)',[id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar por ID');
    }
};


export const crearNota = async(req,res)=>{
    try {
        const{id_item_descrip, id_detalle_item}= req.body;
        await pool.query('select *from fc_crear_nota($1, $2)',[id_item_descrip, id_detalle_item]);
        return res.status(200).json({
            message:'registrado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al registrar ...!');
    }
};

export const actualizarNota = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const {id_item_descrip, id_detalle_item} = req.body;
        await pool.query('select *from fc_actualizar_nota($1, $2, $3)',[id_item_descrip, id_detalle_item, id]);
        return res.status(200).json({
            message:' modificado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al modificar ...!');
    }
};
