import { Router } from 'express'

const router = Router();
import * as usuario_rolCtrl from '../controllers/usuario_rol.controller'

router.get('/', usuario_rolCtrl.listarUsuario_rol);
router.get('/:id', usuario_rolCtrl.listarUsuario_rolId);
router.post('/', usuario_rolCtrl.crearUsuario_rol);
router.put('/:id', usuario_rolCtrl.actualizarUsuario_rol);

export default router;