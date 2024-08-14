//?Importacion necesaria para el Router
import Express from "express"; 

//? Funciones a utilizar
import {CrearBloqueo, CrearHorario, ListarHorarios, ObtenerDetalleHorario} from '../Controllers/HorarioController'

//!Se inicializa la variable de Router
const RutasHorario=Express.Router()

//*Inicializacion de las ruta para la api

//Rutas para categoria
RutasHorario.get('/horariosBloqueos/:id',ListarHorarios)

RutasHorario.get('/:id',ObtenerDetalleHorario)
RutasHorario.post('/',CrearHorario)
// RutasHorario.put('/:id',ActualizarHorario)
// RutasHorario.put('/:id',BorrarHorario)
// Rutas para Bloqueos
// RutasHorario.get('/bloqueos', ListarBloqueos);
// RutasHorario.get('/bloqueos/:id', ObtenerBloqueo);
RutasHorario.post('/bloqueos', CrearBloqueo);
// RutasHorario.put('/bloqueos/:id', ActualizarBloqueo);
// RutasHorario.delete('/bloqueos/:id', BorrarBloqueo);


//Se exportan las rutas
export default RutasHorario;
