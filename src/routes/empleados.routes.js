import { Router } from 'express';
import {obtenerEmpleados, obtenerEmpleado, registrarEmpleado, eliminarEmpleado} from '../controllers/empleados.controllers.js';

const router = Router();

// Rutas
router.get('/empleados', obtenerEmpleados); // Ruta para obtener todos los empleados 

// RUTA PARA OBTENER UN EMPLEADO POR SU ID 
router.get('/empleado/:id_empleado', obtenerEmpleado);

// RUTA PARA REGISTRAR UN EMPLEADO
router.post ('/registrarempleado' , registrarEmpleado);

// RUTA PARA ELIMINAR UN EMPLEADO POR SU ID
router.delete('/eliminarempleado/:id_empleado', eliminarEmpleado);
export default router;