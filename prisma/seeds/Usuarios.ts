import { Rol } from "@prisma/client"


export const usuarios = [
  {
    nombre: 'Juan Pérez',
    telefono: '12345678',
    correo_electronico: 'juan.perez@example.com',
    direccion: 'Calle Falsa 123',
    fecha_nacimiento: new Date('1990-01-01'),
    contrasena: 'password123',
    rol: Rol.cliente,
    id_sucursal: 1,
  },
  {
    nombre: 'María García',
    telefono: '87654321',
    correo_electronico: 'maria.garcia@example.com',
    direccion: 'Avenida Siempre Viva 742',
    fecha_nacimiento: new Date('1985-05-15'),
    contrasena: 'password456',
    rol: Rol.administrador,
    id_sucursal: 2,
  },
  {
    nombre: 'Carlos Rodríguez',
    telefono: '11223344',
    correo_electronico: 'carlos.rodriguez@example.com',
    direccion: 'Boulevard de los Sueños Rotos 101',
    fecha_nacimiento: new Date('1975-12-20'),
    contrasena: 'password789',
    rol: Rol.encargado,
    id_sucursal: 3,
  },
];