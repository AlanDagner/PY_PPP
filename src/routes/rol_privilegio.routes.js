import { Router } from 'express'

const router = Router();
import * as rol_privilegiosCtrl from '../controllers/rol_privilegio.controller'

router.get('/', rol_privilegiosCtrl.listarRol_privilegio);
router.get('/:id', rol_privilegiosCtrl.listarRol_privilegioId);
router.post('/', rol_privilegiosCtrl.crearRol_privilegio);
router.put('/:id', rol_privilegiosCtrl.actualizarRol_privilegio);

export default router;