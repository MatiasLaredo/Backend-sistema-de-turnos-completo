import {Router} from 'express';
import {obtenerTurnos, crearTurno, editarTurno,eliminarTurno,turnosDisponibles} from '../controllers/turnos.controller.js';
import {verificarToken} from '../middleware/auth.middleware.js';

const router = Router();

router.get('/', verificarToken, obtenerTurnos);
router.get('/disponibles', turnosDisponibles);
router.post('/', crearTurno);
router.put('/:id', editarTurno);//el id se pasa como parametro en la url para identificar el turno que se desea editar
router.delete('/:id', eliminarTurno);

export default router;