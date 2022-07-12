import { Router } from 'express'

const router = Router();
import * as detalle_inicioCtrl from '../controllers/detalle_inicio.controller'

router.get('/', detalle_inicioCtrl.listarDetalle_inicio);
router.get('/:id', detalle_inicioCtrl.listarDetalle_inicioId);
router.post('/', detalle_inicioCtrl.crearDetalle_inicio);
router.put('/:id', detalle_inicioCtrl.actualizarDetalle_inicio);

export default router;