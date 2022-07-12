import { Router } from 'express'

const router = Router();
import * as notaCtrl from '../controllers/nota.controller'

router.get('/', notaCtrl.listarNota);
router.get('/:id', notaCtrl.listarNotaId);
router.post('/', notaCtrl.crearNota);
router.put('/:id', notaCtrl.actualizarNota);

export default router;