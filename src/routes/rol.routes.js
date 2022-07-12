import { Router } from 'express'

const router = Router();
import * as rolCtrl from '../controllers/rol.controller'

router.get('/', rolCtrl.listarRol);
router.get('/:id', rolCtrl.listarRolId);
router.post('/', rolCtrl.crearRol);
router.put('/:id', rolCtrl.actualizarRol);

export default router;