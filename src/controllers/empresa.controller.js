
import { pool } from '../database'

export const listarEmpresa = async (req,res)=>{
    try {
        const response = await pool.query('Select *from fc_listar_empresa()');
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar empresas');
    }
};

export const listarEmpresaId = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select * from fc_listar_empresa_id($1)',[id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar empresa');
    }
};


export const crearEmpresa = async(req,res)=>{
    try {
        const{nombre, ruc, direccion, telefono}= req.body;
        await pool.query('select *from fc_crear_empresa($1, $2, $3, $4)',[nombre, ruc, direccion, telefono]);
        return res.status(200).json({
            message:'Empresa registrada correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al registrar empresa ...!');
    }
};

export const actualizarEmpresa = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const {nombre, ruc, direccion, telefono} = req.body;
        await pool.query('select *from fc_actualizar_empresa($1, $2, $3, $4, $5)',[nombre, ruc, direccion, telefono, id]);
        return res.status(200).json({
            message:'Empresa modificado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al modificar empresa ...!');
    }
};


 