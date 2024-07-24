import { PrismaClient } from "@prisma/client";
import { Request, Response } from 'express';
const prisma = new PrismaClient();



export async function ListarSucursales(request: Request, response: Response) {
    await prisma.sucursal.findMany().then(async (Sucursales) => {
        await prisma.$disconnect();
        response.status(200)
        return response.json(Sucursales)
    }).catch(async () => {
        await prisma.$disconnect();
        response.status(400).send('Error:Sucursales no encontradas');
    })
}

export async function ObtenerSucursales(request: Request, response: Response) {
    const id = request.params.id
    await prisma.sucursal.findFirst(
        {
            where: { id: parseInt(id) },
            include:{usuarios:true}
        }
    ).then(async (Sucursales) => {
        await prisma.$disconnect();
        response.status(200)
        return response.json(Sucursales)
    }).catch(async () => {
        await prisma.$disconnect();
        response.status(400).send('Error:sucursal no encontradas');
    })
}

export async function CrearSucursales(request: Request, response: Response) {
    const { nombre, descripcion, telefono, direccion, correo_electronico, usuarios } = request.body;
    await prisma.sucursal.create(
        {
            data: {
                nombre,
                descripcion,
                telefono,
                direccion,
                correo_electronico,
                usuarios: {
                    connect: usuarios.map(userId => ({ id: userId }))
                }
            }
        }
    ).then(async (sucursal) => {
        await prisma.$disconnect();
        response.status(200)
        return response.json(sucursal)
    }).catch(async () => {
        await prisma.$disconnect();
        response.status(400).send('Error:sucursal no pudo ser agregada');
    })
}

export async function ActualizarSucursales(request: Request, response: Response) {
    const { nombre, descripcion, telefono, direccion, correo_electronico, usuarios } = request.body;
    const sucursal = {
        nombre,
        descripcion,
        telefono,
        direccion,
        correo_electronico
    }

    await prisma.sucursal.update(
        {
            where: { id: parseInt(request.params.id) },
            data: {
                nombre,
                descripcion,
                telefono,
                direccion,
                correo_electronico, usuarios: {
                    set: [],
                    connect: usuarios.map(userId => ({ id: userId }))
                }
            }
        }
    ).then(async (sucursal) => {
        await prisma.$disconnect();
        response.status(200)
        return response.json(sucursal)
    }).catch(async () => {
        await prisma.$disconnect();
        response.status(400).send('Error:sucursal no pudo ser Actualizada');
    })
}



export async function BorrarSucursales(request: Request, response: Response) {
    const { nombre, descripcion, telefono, direccion, correo_electronico, usuarios } = request.body;
    const sucursal = {
        nombre,
        descripcion,
        telefono,
        direccion,
        correo_electronico
    }

    await prisma.sucursal.delete(
        {
            where: { id: parseInt(request.params.id) },
            
        }
    ).then(async (sucursal) => {
        await prisma.$disconnect();
        response.status(200)
        return response.json(sucursal)
    }).catch(async () => {
        await prisma.$disconnect();
        response.status(400).send('Error:sucursal no pudo ser Actualizada');
    })
}





export async function ObtenerGerentesPorsucursal(request: Request, response: Response) {
    const id = parseInt(request.params.id)

    
if(id>0){
    await prisma.usuario.findMany(
        {
            where: {
                rol: 'encargado',
                OR: [
                  { sucursal: null }, // Usuarios que no tienen sucursal asignada
                  { sucursal: { id: id } } // Reemplaza 1 con el ID de la sucursal específica
                ]
              }
        }
    ).then(async (Sucursales) => {
        await prisma.$disconnect();
        response.status(200)
        return response.json(Sucursales)
    }).catch(async (e) => {
        await prisma.$disconnect();
        response.status(400).send('Error:sucursal no encontradas');
        console.log(e);
        
    })

}


}


export async function ObtenerGerentesnull(request: Request, response: Response) {
    const id = request.params.id

    await prisma.usuario.findMany(
        {
            where: {
                rol: 'encargado',
                id_sucursal:null
              }
        }
    ).then(async (Sucursales) => {
        await prisma.$disconnect();
        response.status(200)
        return response.json(Sucursales)
    }).catch(async (e) => {
        await prisma.$disconnect();
        response.status(400).send('Error:sucursal no encontradas');
        console.log(e);
        
    })}


    export async function ListarSucursalesHorarios(request: Request, response: Response) {
        await prisma.sucursal.findMany({include:{horarios:true}}).then(async (Sucursales) => {
            await prisma.$disconnect();
            response.status(200)
            return response.json(Sucursales)
        }).catch(async () => {
            await prisma.$disconnect();
            response.status(400).send('Error:Sucursales no encontradas');
        })
    }