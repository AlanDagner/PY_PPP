import { Router } from 'express'

const router = Router();
import * as estadoCtrl from '../controllers/estado.controller'

router.get('/', estadoCtrl.listarEstado);
router.get('/:id', estadoCtrl.listarEstadoId);
router.post('/', estadoCtrl.crearEstado);
router.put('/:id', estadoCtrl.actualizarEstado);

export default router;