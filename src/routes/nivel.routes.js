import { Router } from 'express'

const router = Router();
import * as nivelCtrl from '../controllers/nivel.controller'

router.get('/', nivelCtrl.listarNivel);
router.get('/:id', nivelCtrl.listarNivelId);
router.post('/', nivelCtrl.crearNivel);
router.put('/:id', nivelCtrl.actualizarNivel);

export default router;