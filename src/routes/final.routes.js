import { Router } from 'express'

const router = Router();
import * as finalCtrl from '../controllers/final.controller'

router.get('/', finalCtrl.listarFinal);
router.get('/:id', finalCtrl.listarFinalId);
router.post('/', finalCtrl.crearFinal);
router.put('/:id', finalCtrl.actualizarFinal);

export default router;