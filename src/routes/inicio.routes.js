import { Router } from 'express'

const router = Router();
import * as inicioCtrl from '../controllers/inicio.controller'

router.get('/', inicioCtrl.listarInicio);
router.get('/:id', inicioCtrl.listarInicioId);
router.post('/', inicioCtrl.crearInicio);
router.put('/:id', inicioCtrl.actualizarInicio);

export default router;