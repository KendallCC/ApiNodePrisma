//?Importacion necesaria para el Router
import Express from "express"; 

//?Funciones a utilizar
import {ListarCategorias,ObtenerCategoria,CrearCategoria,ActualizarCategoria} from '../Controllers/CategoriaController'

//!Se inicializa la variable de Router
const RutasCategoria=Express.Router()

//*Inicializacion de las ruta para la api

//Rutas para categoria
RutasCategoria.get('/',ListarCategorias)
RutasCategoria.get('/:id',ObtenerCategoria)
RutasCategoria.post('/',CrearCategoria)
RutasCategoria.put('/:id',ActualizarCategoria)



//Se exportan las rutas
export default RutasCategoria;
