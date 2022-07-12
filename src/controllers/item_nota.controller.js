
import { pool } from '../database'

export const listarItem_nota = async (req,res)=>{
    try {
        const response = await pool.query('Select *from fc_listar_item_nota()');
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar');
    }
};

export const listarItem_notaId = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select * from fc_listar_item_nota_id($1)',[id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar por ID');
    }
};


export const crearItem_nota = async(req,res)=>{
    try {
        const{id_visita, id_item}= req.body;
        await pool.query('select *from fc_crear_item_nota($1, $2)',[id_visita, id_item]);
        return res.status(200).json({
            message:'registrado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al registrar ...!');
    }
};

export const actualizarItem_nota= async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const {id_visita, id_item} = req.body;
        await pool.query('select *from fc_actualizar_item_nota($1, $2, $3)',[id_visita, id_item, id]);
        return res.status(200).json({
            message:' modificado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al modificar ...!');
    }
};
