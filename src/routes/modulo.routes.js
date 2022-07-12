import { Router } from 'express'

const router = Router();
import * as moduloCtrl from '../controllers/modulo.controller'

router.get('/', moduloCtrl.listarModulo);
router.get('/:id', moduloCtrl.listarModuloId);
router.post('/', moduloCtrl.crearModulo);
router.put('/:id', moduloCtrl.actualizarModulo);

export default router;