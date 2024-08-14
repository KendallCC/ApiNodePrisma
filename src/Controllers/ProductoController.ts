import { PrismaClient } from "@prisma/client";
import { Request, Response } from 'express';
const prisma = new PrismaClient();

export async function ListarProductos(request: Request, response: Response) {
    await prisma.producto.findMany({include:{categoria:true}}).then(async (Producto) => {
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

const {nombre,descripcion,precio,Marca,Tipo_mascota,categoria} = request.body

const producto={
    nombre:nombre,
    descripcion: descripcion, 
    precio: precio,
    Marca:Marca,
    Tipo_mascota:Tipo_mascota,
    id_categoria:categoria
}

console.log(producto);


    await prisma.producto.create(
        {
            data: producto
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
    const {nombre,descripcion,precio,Marca,Tipo_mascota,categoria} = request.body
    const producto={
        nombre:nombre,
        descripcion: descripcion, 
        precio: precio,
        Marca:Marca,
        Tipo_mascota:Tipo_mascota,
        id_categoria:categoria
    }
    


    await prisma.producto.update(
        {
            where: { id: parseInt(request.params.id) },
            data: producto
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

export async function BorrarProducto(request: Request, response: Response) {

    await prisma.producto.delete(
        {
            where: { id: parseInt(request.params.id) },
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
