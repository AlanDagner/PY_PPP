
import { pool } from '../database'

export const listarModulo = async (req,res)=>{
    try {
        const response = await pool.query('Select *from fc_listar_modulo()');
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar');
    }
};

export const listarModuloId = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select * from fc_listar_modulo_id($1)',[id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar por ID');
    }
};


export const crearModulo = async(req,res)=>{
    try {
        const{nombre_modulo}= req.body;
        await pool.query('select *from fc_crear_modulo($1)',[nombre_modulo]);
        return res.status(200).json({
            message:'registrado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al registrar ...!');
    }
};

export const actualizarModulo = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const {nombre_modulo} = req.body;
        await pool.query('select *from fc_actualizar_modulo($1, $2)',[nombre_modulo, id]);
        return res.status(200).json({
            message:' modificado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al modificar ...!');
    }
};
