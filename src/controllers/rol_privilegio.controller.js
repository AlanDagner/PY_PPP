
import { pool } from '../database'

export const listarRol_privilegio = async (req,res)=>{
    try {
        const response = await pool.query('Select *from fc_listar_rol_privilegio()');
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar');
    }
};

export const listarRol_privilegioId = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select * from fc_listar_rol_privilegio_id($1)',[id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar por ID');
    }
};


export const crearRol_privilegio = async(req,res)=>{
    try {
        const{id_rol, id_privilegio}= req.body;
        await pool.query('select *from fc_crear_rol_privilegio($1, $2)',[id_rol, id_privilegio]);
        return res.status(200).json({
            message:'registrado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al registrar ...!');
    }
};

export const actualizarRol_privilegio = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const {id_rol, id_privilegio} = req.body;
        await pool.query('select *from fc_actualizar_rol_privilegio($1, $2, $3)',[id_rol, id_privilegio, id]);
        return res.status(200).json({
            message:' modificado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al modificar ...!');
    }
};
