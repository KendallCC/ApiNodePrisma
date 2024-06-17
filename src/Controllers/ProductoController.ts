import { PrismaClient } from "@prisma/client";
import { Request, Response } from 'express';
const prisma = new PrismaClient();

export async function ListarProductos(request: Request, response: Response) {
    await prisma.producto.findMany().then(async (Producto) => {
        await prisma.$disconnect();
        response.status(200)
        return response.json(Producto)
    }).catch(async () => {
        await prisma.$disconnect();
        response.status(400).send('Error:Producto no encontradas');
    })
}

export async function ObtenerProducto(request: Request, response: Response) {
    const id = request.params.id
    await prisma.producto.findFirst(
        {
            where: { id: parseInt(id) },
            include:{categoria:true}
        }
    ).then(async (Producto) => {
        await prisma.$disconnect();
        response.status(200)
        return response.json(Producto)
    }).catch(async () => {
        await prisma.$disconnect();
        response.status(400).send('Error:producto no encontradas');
    })
}

export async function CrearProducto(request: Request, response: Response) {

    await prisma.producto.create(
        {
            data: request.body
        }
    ).then(async (producto) => {
        await prisma.$disconnect();
        response.status(200)
        return response.json(producto)
    }).catch(async () => {
        await prisma.$disconnect();
        response.status(400).send('Error:producto no pudo ser agregada');
    })
}

export async function ActualizarProducto(request: Request, response: Response) {

    await prisma.producto.update(
        {
            where: { id: parseInt(request.params.id) },
            data: request.body
        }
    ).then(async (producto) => {
        await prisma.$disconnect();
        response.status(200)
        return response.json(producto)
    }).catch(async () => {
        await prisma.$disconnect();
        response.status(400).send('Error:producto no pudo ser Actualizada');
    })
}
