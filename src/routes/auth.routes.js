import {Router} from 'express';
import {login, register} from '../controllers/auth.controller.js';

const router=Router(); //esto es para crear una instancia de Router, que es un objeto que nos permite definir rutas para nuestra aplicacion

router.post('/login', login); //esto es para definir una ruta POST para el login, se llama a la funcion login que se encuentra en el archivo auth.controller.js
router.post('/register', register); //esto es para definir una ruta POST para el registro, se llama a la funcion register que se encuentra en el archivo auth.controller.js

export default router;