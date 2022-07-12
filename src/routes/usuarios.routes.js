import { Router } from 'express'

const router = Router();
import * as usuariosCtrl from '../controllers/usuarios.controller'

router.get('/', usuariosCtrl.listarUsuarios);
router.get('/:id', usuariosCtrl.listarUsuariosId);
router.post('/', usuariosCtrl.crearUsuarios);
router.put('/:id', usuariosCtrl.actualizarUsuarios);

export default router;