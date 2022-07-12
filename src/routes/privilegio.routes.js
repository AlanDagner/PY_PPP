import { Router } from 'express'

const router = Router();
import * as privilegiosCtrl from '../controllers/privilegio.controller'

router.get('/', privilegiosCtrl.listarPrivilegio);
router.get('/:id', privilegiosCtrl.listarPrivilegioId);
router.post('/', privilegiosCtrl.crearPrivilegio);
router.put('/:id', privilegiosCtrl.actualizarPrivilegio);

export default router;