import { Router } from 'express'

const router = Router();
import * as personaCtrl from '../controllers/persona.controller'

router.get('/',personaCtrl.listarPersona);
router.get('/:id',personaCtrl.listarPersonaId);
router.post('/', personaCtrl.crearPersona);
router.put('/:id',personaCtrl.actualizarPersona);


export default router;