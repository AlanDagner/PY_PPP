import { Router } from 'express'

const router = Router();
import * as item_notaCtrl from '../controllers/item_nota.controller'

router.get('/', item_notaCtrl.listarItem_nota);
router.get('/:id', item_notaCtrl.listarItem_notaId);
router.post('/', item_notaCtrl.crearItem_nota);
router.put('/:id', item_notaCtrl.actualizarItem_nota);

export default router;