import { Router } from 'express'

const router = Router();
import * as visitaCtrl from '../controllers/visita.controller'

router.get('/', visitaCtrl.listarVisita);
router.get('/:id', visitaCtrl.listarVisitaId);
router.post('/', visitaCtrl.crearVisita);
router.put('/:id', visitaCtrl.actualizarVisita);

export default router;