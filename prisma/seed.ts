import { PrismaClient } from "@prisma/client";
import { categorias } from "./seeds/Categorias";
import { Usuarios } from "./seeds/Usuarios";
const prisma= new PrismaClient();

const main = async()=>{
    try {
        await prisma.categoria.createMany({
            data:categorias
        });

        await prisma.usuario.createMany({
            data:Usuarios
        });

    } catch (error) {
        throw error
    }
}

main().catch((err)=>{
    console.warn('Error al ejecutar el seader: \n',err)
})