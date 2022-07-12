
import { pool } from '../database'

export const listarNivel= async (req,res)=>{
    try {
        const response = await pool.query('Select *from fc_listar_nivel()');
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar');
    }
};

export const listarNivelId = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select * from fc_listar_nivel_id($1)',[id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar por ID');
    }
};


export const crearNivel = async(req,res)=>{
    try {
        const{nombre, descripcion}= req.body;
        await pool.query('select *from fc_crear_nivel($1, $2)',[nombre, descripcion]);
        return res.status(200).json({
            message:'registrado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al registrar ...!');
    }
};

export const actualizarNivel = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const {nombre, descripcion} = req.body;
        await pool.query('select *from fc_actualizar_nivel($1, $2, $3)',[nombre, descripcion, id]);
        return res.status(200).json({
            message:' modificado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al modificar ...!');
    }
};