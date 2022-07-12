import { Router } from 'express'

const router = Router();
import * as detalle_itemCtrl from '../controllers/detalle_item.controller'

router.get('/', detalle_itemCtrl.listarDetalle_item);
router.get('/:id', detalle_itemCtrl.listarDetalle_item_Id);
router.post('/', detalle_itemCtrl.crearDetalle_item);
router.put('/:id', detalle_itemCtrl.actualizarDetalle_item);

export default router;