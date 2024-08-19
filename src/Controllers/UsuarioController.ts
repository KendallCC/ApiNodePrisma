import { PrismaClient, Rol } from "@prisma/client";

import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function ListarUsuarios(request: Request, response: Response) {
  await prisma.usuario
    .findMany({include:{sucursal:true}})
    .then(async (usuario) => {
      await prisma.$disconnect();
      response.status(200);
      return response.json(usuario);
    })
    .catch(async () => {
      await prisma.$disconnect();
      response.status(400).send("Error:Usuarios no encontradas");
    });
}

export async function ObtenerUsuarios(request: Request, response: Response) {
  const id = request.params.id;
  await prisma.usuario
    .findFirst({
      where: { id: parseInt(id) },
      
    })
    .then(async (Usuario) => {
      await prisma.$disconnect();
      response.status(200);
      return response.json(Usuario);
    })
    .catch(async () => {
      await prisma.$disconnect();
      response.status(400).send("Error:Usuario no encontrado");
    });
}

export async function CrearUsuario(request: Request, response: Response) {
  
  console.log('llegue aca');
  
console.log(request.body);


  try {
    // Extraer la contraseña y otros datos del cuerpo de la solicitud
    const { contrasena, rol = Rol.cliente, ...restoDatos } = request.body;

    // Cifrar la contraseña antes de almacenarla
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(contrasena, salt);

    console.log('contra: ',contrasena,'Role',rol,'Datos cliente',restoDatos);
    

    // Crear el usuario con la contraseña cifrada y el rol por defecto como cliente
    const nuevoUsuario = await prisma.usuario.create({
      data: {
        ...restoDatos,
        contrasena: hashedPassword, // Usar la contraseña cifrada
        rol: rol, // Usar el rol proporcionado o el rol "cliente" por defecto
      },
    });

    await prisma.$disconnect();
    response.status(200).json(nuevoUsuario);
  } catch (error) {
    await prisma.$disconnect();
    response.status(400).send("Error: Usuario no pudo ser agregado por error: "+error);
  }
}

export async function ActualizarUsuario(request: Request, response: Response) {
  await prisma.usuario
    .update({
      where: { id: parseInt(request.params.id) },
      data: request.body,
    })
    .then(async (Usuario) => {
      await prisma.$disconnect();
      response.status(200);
      return response.json(Usuario);
    })
    .catch(async () => {
      await prisma.$disconnect();
      response.status(400).send("Error:Usuario no pudo ser Actualizado");
    });
}


export async function Login(req: Request, res: Response) {
  
  const { correo_electronico, contrasena } = req.body;

  try {
    // Verificar si el usuario existe
    const usuario = await prisma.usuario.findUnique({
      where: { correo_electronico }
    });

    console.log(usuario);
    

    if (!usuario) {
      return res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
    }

    // Verificar la contraseña
    const isMatch = await bcrypt.compare(contrasena, usuario.contrasena);

    if (!isMatch) {
      return res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
    }

    // Crear el token JWT
    const token = jwt.sign(
      {
        id: usuario.id,
        nombre: usuario.nombre,
        correo_electronico: usuario.correo_electronico,
        rol: usuario.rol,
        sucursal:usuario.id_sucursal
      },
      process.env.JWT_SECRET || 'secret', // Asegúrate de tener una variable de entorno para el secreto
      { expiresIn: '1h' } // El token expira en 1 hora
    );


    // Devolver el token al cliente
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error del servidor' });
  }
  }