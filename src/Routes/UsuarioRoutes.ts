//?Importacion necesaria para el Router
import Express from "express"; 

//?Funciones a utilizar
import {ListarUsuarios,ObtenerUsuarios,CrearUsuario,ActualizarUsuario} from '../Controllers/UsuarioController'

//!Se inicializa la variable de Router
const RutasUsuarios=Express.Router()

//*Inicializacion de las ruta para la api

//Rutas para categoria
RutasUsuarios.get('/',ListarUsuarios)
RutasUsuarios.get('/:id',ObtenerUsuarios)
RutasUsuarios.post('/',CrearUsuario)
RutasUsuarios.put('/:id',ActualizarUsuario)

//Se exportan las rutas
export default RutasUsuarios;
