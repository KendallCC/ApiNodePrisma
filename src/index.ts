//?Importaciones necesarias para la api
import { Prisma, PrismaClient } from '@prisma/client'
import express from 'express'
import cors from 'cors'
//!Importacion de las variables entorno
import dotenv from "dotenv";
dotenv.config();

//*Rutas con sus respectivas funciones
import RutasCategoria from './Routes/CategoriaRoutes';
import RutasUsuarios from './Routes/UsuarioRoutes';

//?inicializacion de variables y puertos
const prisma = new PrismaClient()
const app = express()
const port=process.env.PORT||3000

//!Configuracion de la api
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true})) 

//?Configuracion de la ruta del api
app.use('/categoria/',RutasCategoria)
app.use('/usuario/',RutasUsuarios)



//!Inicializacion del puerto
const server = app.listen(port, () =>
  console.log(`Server Activo en la url: http://localhost:${port}`)
) 
