
import { pool } from '../database'

export const listarItem = async (req,res)=>{
    try {
        const response = await pool.query('Select *from fc_listar_item()');
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar');
    }
};

export const listarItemId = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select * from fc_listar_item_id($1)',[id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar por ID');
    }
};


export const crearItem= async(req,res)=>{
    try {
        const{nombre}= req.body;
        await pool.query('select *from fc_crear_item($1)',[nombre]);
        return res.status(200).json({
            message:'registrado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al registrar ...!');
    }
};

export const actualizarItem = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const {nombre} = req.body;
        await pool.query('select *from fc_actualizar_item($1, $2)',[nombre, id]);
        return res.status(200).json({
            message:' modificado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al modificar ...!');
    }
};
