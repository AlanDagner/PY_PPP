import { Router } from 'express'

const router = Router();
import * as solicitudCtrl from '../controllers/solicitud.controller'

router.get('/', solicitudCtrl.listarSolicitud);
router.get('/:id', solicitudCtrl.listarSolicitudId);
router.post('/', solicitudCtrl.crearSolicitud);
router.put('/:id', solicitudCtrl.actualizarSolicitud);
router.put('/:id', solicitudCtrl.eliminarSolicitud);
router.put('/:id', solicitudCtrl.recuperarSolicitud);

export default router;
