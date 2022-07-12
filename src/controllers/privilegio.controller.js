
import { pool } from '../database'

export const listarPrivilegio = async (req,res)=>{
    try {
        const response = await pool.query('Select *from fc_listar_privilegio()');
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar');
    }
};

export const listarPrivilegioId = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select * from fc_listar_privilegio_id($1)',[id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar por ID');
    }
};


export const crearPrivilegio = async(req,res)=>{
    try {
        const{nombre_privilegio, id_modulo}= req.body;
        await pool.query('select *from fc_crear_privilegio($1, $2)',[nombre_privilegio, id_modulo]);
        return res.status(200).json({
            message:'registrado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al registrar ...!');
    }
};

export const actualizarPrivilegio = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const {id_rol, id_privilegio} = req.body;
        await pool.query('select *from fc_actualizar_privilegio($1, $2, $3)',[nombre_privilegio, id_modulo, id]);
        return res.status(200).json({
            message:' modificado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al modificar ...!');
    }
};
