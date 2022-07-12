import { Router } from 'express'

const router = Router();
import * as gradoCtrl from '../controllers/grado.controller'

router.get('/', gradoCtrl.listarGrado);
router.get('/:id', gradoCtrl.listarGradoId);
router.post('/', gradoCtrl.crearGrado);
router.put('/:id', gradoCtrl.actualizarGrado);

export default router;