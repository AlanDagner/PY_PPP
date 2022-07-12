
import { pool } from '../database'

export const listarUsuario_rol = async (req,res)=>{
    try {
        const response = await pool.query('Select *from fc_listar_usuario_rol()');
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar');
    }
};

export const listarUsuario_rolId = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select * from fc_listar_usuario_rol_id($1)',[id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar por ID');
    }
};


export const crearUsuario_rol = async(req,res)=>{
    try {
        const{id_usuario, id_rol}= req.body;
        await pool.query('select *from fc_crear_usuario_rol($1, $2)',[id_usuario, id_rol]);
        return res.status(200).json({
            message:'registrado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al registrar ...!');
    }
};

export const actualizarUsuario_rol = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const {id_usuario, id_rol} = req.body;
        await pool.query('select *from fc_actualizar_usuario_rol($1, $2, $3)',[id_usuario, id_rol, id]);
        return res.status(200).json({
            message:' modificado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al modificar ...!');
    }
};
