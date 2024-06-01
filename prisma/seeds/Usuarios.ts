import { Role } from "@prisma/client"


export const Usuarios=[
    {
      
      "nombre": "Kendall Cespedes Castillo",
      "telefono": "86586810",
      "email": "Kendall26092002@gmail.com",
      "direccion": "Calle 10 San Jose",
      "fechaNacimiento": "1980-01-01T00:00:00.000Z",
      "contrasena": "password123",
      "rol": Role.Administrador
    },
    {
      
      "nombre": "Encargado",
      "telefono": "111111111",
      "email": "starco26092002@gmail.com",
      "direccion": "Calle 5 Avenida Central",
      "fechaNacimiento": "1990-02-02T00:00:00.000Z",
      "contrasena": "password456",
      "rol": Role.Encargado
    },
    {
      
      "nombre": "Cliente",
      "telefono": "22222222",
      "email": "kendall.cesp@gmail.com",
      "direccion": "Calle 15 Barrio Escalante",
      "fechaNacimiento": "2000-03-03T00:00:00.000Z",
      "contrasena": "password789",
      "rol": Role.Cliente
    }
  ]