
import { pool } from '../database'

export const listarUsuarios = async (req,res)=>{
    try {
        const response = await pool.query('Select *from fc_listar_usuarios()');
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar');
    }
};

export const listarUsuariosId = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select * from fc_listar_usuarios_id($1)',[id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar por ID');
    }
};


export const crearUsuarios = async(req,res)=>{
    try {
        const{id_persona, correo_usuario, contrasenia_usuario}= req.body;
        await pool.query('select *from fc_crear_usuarios($1, $2, $3)',[id_persona, correo_usuario, contrasenia_usuario]);
        return res.status(200).json({
            message:'registrado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al registrar ...!');
    }
};

export const actualizarUsuarios = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const {id_persona, correo_usuario, contrasenia_usuario} = req.body;
        await pool.query('select *from fc_actualizar_usuarios($1, $2, $3, $4)',[id_persona, correo_usuario, contrasenia_usuario, id]);
        return res.status(200).json({
            message:' modificado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al modificar ...!');
    }
};
