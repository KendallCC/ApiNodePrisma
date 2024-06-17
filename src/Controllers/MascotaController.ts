import { PrismaClient } from "@prisma/client";
import { Request, Response } from 'express';
const prisma = new PrismaClient();

export async function ListarMascotas(request: Request, response: Response) {
    await prisma.mascota.findMany().then(async (Mascotas) => {
        await prisma.$disconnect();
        response.status(200)
        return response.json(Mascotas)
    }).catch(async () => {
        await prisma.$disconnect();
        response.status(400).send('Error:Mascotas no encontradas');
    })
}

export async function ObtenerMascotas(request: Request, response: Response) {
    const id = request.params.id
    await prisma.mascota.findFirst(
        {
            where: { id: parseInt(id) }
            
        }
    ).then(async (Mascotas) => {
        await prisma.$disconnect();
        response.status(200)
        return response.json(Mascotas)
    }).catch(async () => {
        await prisma.$disconnect();
        response.status(400).send('Error:mascota no encontradas');
    })
}

export async function CrearMascotas(request: Request, response: Response) {

    await prisma.mascota.create(
        {
            data: request.body
        }
    ).then(async (mascota) => {
        await prisma.$disconnect();
        response.status(200)
        return response.json(mascota)
    }).catch(async () => {
        await prisma.$disconnect();
        response.status(400).send('Error:mascota no pudo ser agregada');
    })
}

export async function ActualizarMascotas(request: Request, response: Response) {

    await prisma.mascota.update(
        {
            where: { id: parseInt(request.params.id) },
            data: request.body
        }
    ).then(async (mascota) => {
        await prisma.$disconnect();
        response.status(200)
        return response.json(mascota)
    }).catch(async () => {
        await prisma.$disconnect();
        response.status(400).send('Error:mascota no pudo ser Actualizada');
    })
}

