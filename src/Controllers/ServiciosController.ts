import { PrismaClient } from "@prisma/client";
import { Request, Response } from 'express';
const prisma = new PrismaClient();

export async function ListarServicios(request: Request, response: Response) {
    await prisma.servicio.findMany().then(async (Servicios) => {
        await prisma.$disconnect();
        response.status(200)
        return response.json(Servicios)
    }).catch(async () => {
        await prisma.$disconnect();
        response.status(400).send('Error:Servicios no encontradas');
    })
}

export async function ObtenerServicios(request: Request, response: Response) {
    const id = request.params.id
    await prisma.servicio.findFirst(
        {
            where: { id: parseInt(id) }
            
        }
    ).then(async (servicio) => {
        await prisma.$disconnect();
        response.status(200)
        return response.json(servicio)
    }).catch(async () => {
        await prisma.$disconnect();
        response.status(400).send('Error:mascota no encontradas');
    })
}

export async function CrearServicios(request: Request, response: Response) {

    await prisma.servicio.create(
        {
            data: request.body
        }
    ).then(async (servicio) => {
        await prisma.$disconnect();
        response.status(200)
        return response.json(servicio)
    }).catch(async () => {
        await prisma.$disconnect();
        response.status(400).send('Error:mascota no pudo ser agregada');
    })
}

export async function ActualizarServicios(request: Request, response: Response) {

    await prisma.servicio.update(
        {
            where: { id: parseInt(request.params.id) },
            data: request.body
        }
    ).then(async (servicio) => {
        await prisma.$disconnect();
        response.status(200)
        return response.json(servicio)
    }).catch(async () => {
        await prisma.$disconnect();
        response.status(400).send('Error:mascota no pudo ser Actualizada');
    })
}

