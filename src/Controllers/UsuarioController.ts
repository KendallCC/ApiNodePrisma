import { PrismaClient } from "@prisma/client";
import { Request, Response } from 'express';
const prisma = new PrismaClient();

export async function ListarUsuarios(request:Request,response:Response){
    await prisma.usuario.findMany().then(async(usuario)=>{
        await prisma.$disconnect();
        response.status(200)
        return response.json(usuario)
    }).catch(async()=>{
        await prisma.$disconnect();
        response.status(400).send('Error:Usuarios no encontradas');
    })
}

export async function ObtenerUsuarios(request:Request,response:Response){
    const id=request.params.id
    await prisma.usuario.findFirst(
        {
            where:{id:parseInt(id)}
        }
    ).then(async(categorias)=>{
        await prisma.$disconnect();
        response.status(200)
        return response.json(categorias)
    }).catch(async()=>{
        await prisma.$disconnect();
        response.status(400).send('Error:Usuario no encontrado');
    })
}

export async function CrearUsuario(request:Request,response:Response){
   
    await prisma.usuario.create(
        {
            data:request.body
        }
    ).then(async(categoria)=>{
        await prisma.$disconnect();
        response.status(200)
        return response.json(categoria)
    }).catch(async()=>{
        await prisma.$disconnect();
        response.status(400).send('Error:Usuario no pudo ser agregada');
    })
}

export async function ActualizarUsuario(request:Request,response:Response){

    await prisma.usuario.update(
        {
            where:{id:parseInt(request.params.id)},
            data:request.body
        }
    ).then(async(categoria)=>{
        await prisma.$disconnect();
        response.status(200)
        return response.json(categoria)
    }).catch(async()=>{
        await prisma.$disconnect();
        response.status(400).send('Error:Usuario no pudo ser Actualizado');
    })
}

