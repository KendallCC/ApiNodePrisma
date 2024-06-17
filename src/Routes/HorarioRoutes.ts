//?Importacion necesaria para el Router
import Express from "express"; 

//? Funciones a utilizar
import {ListarHorarios,ObtenerHorario,CrearHorario,ActualizarHorario} from '../Controllers/HorarioController'

//!Se inicializa la variable de Router
const RutasHorario=Express.Router()

//*Inicializacion de las ruta para la api

//Rutas para categoria
RutasHorario.get('/',ListarHorarios)
RutasHorario.get('/:id',ObtenerHorario)
RutasHorario.post('/',CrearHorario)
RutasHorario.put('/:id',ActualizarHorario)



//Se exportan las rutas
export default RutasHorario;
