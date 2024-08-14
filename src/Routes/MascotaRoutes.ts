//?Importacion necesaria para el Router
import Express from "express"; 

//? Funciones a utilizar
import {ListarMascotas,ObtenerMascotas,CrearMascotas,ActualizarMascotas, ObtenerMascota} from '../Controllers/MascotaController'

//!Se inicializa la variable de Router
const RutasMascota=Express.Router()

//*Inicializacion de las ruta para la api

//Rutas para categoria
RutasMascota.get('/',ListarMascotas)
RutasMascota.get('/:id',ObtenerMascota)
RutasMascota.get('/cliente/:id',ObtenerMascotas)
RutasMascota.post('/',CrearMascotas)
RutasMascota.put('/:id',ActualizarMascotas)



//Se exportan las rutas
export default RutasMascota;
