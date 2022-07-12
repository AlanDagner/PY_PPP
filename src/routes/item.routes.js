import { Router } from 'express'

const router = Router();
import * as itemCtrl from '../controllers/item.controller'

router.get('/', itemCtrl.listarItem);
router.get('/:id', itemCtrl.listarItemId);
router.post('/', itemCtrl.crearItem);
router.put('/:id', itemCtrl.actualizarItem);

export default router;