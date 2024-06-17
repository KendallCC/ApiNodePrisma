import { PrismaClient } from "@prisma/client";
import { categorias } from "./seeds/Categorias";
import { sucursales } from "./seeds/Sucursales";
import { usuarios } from "./seeds/Usuarios";
import { mascotas } from "./seeds/Mascotas";
import { servicios } from "./seeds/Servicios";
import { productos } from "./seeds/Producto";
import { horarios } from "./seeds/Horarios";
import { citas } from "./seeds/Cita";
import { facturas } from "./seeds/Factura";
import { detalles_factura } from "./seeds/DetalleFactura";

const prisma= new PrismaClient();

const main = async()=>{
    try {
        await prisma.categoria.createMany({
            data:categorias
        });
        
        await prisma.sucursal.createMany({
            data:sucursales
        });

        await prisma.usuario.createMany({
            data:usuarios
        });

        await prisma.mascota.createMany({
            data:mascotas
        });

        await prisma.servicio.createMany({
            data:servicios
        });

        await prisma.producto.createMany({
            data:productos
        });

        await prisma.horario.createMany({
            data:horarios
        });

        await prisma.cita.createMany({
            data:citas
        });

        await prisma.factura.createMany({
            data:facturas
        });
        await prisma.detalleFactura.createMany({
            data:detalles_factura
        });


        console.log("Datos iniciales creados!");

    } catch (error) {
        throw error
    }
}

main().catch((err)=>{
    console.warn('Error al ejecutar el seader: \n',err)
})