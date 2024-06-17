/*
  Warnings:

  - You are about to drop the column `fechaCita` on the `cita` table. All the data in the column will be lost.
  - You are about to drop the column `horaCita` on the `cita` table. All the data in the column will be lost.
  - You are about to drop the column `idCliente` on the `cita` table. All the data in the column will be lost.
  - You are about to drop the column `idMascota` on the `cita` table. All the data in the column will be lost.
  - You are about to drop the column `idServicio` on the `cita` table. All the data in the column will be lost.
  - You are about to drop the column `idSucursal` on the `cita` table. All the data in the column will be lost.
  - The values [No_Asistio] on the enum `Cita_estado` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `idFactura` on the `detallefactura` table. All the data in the column will be lost.
  - You are about to drop the column `idProducto` on the `detallefactura` table. All the data in the column will be lost.
  - You are about to drop the column `idServicio` on the `detallefactura` table. All the data in the column will be lost.
  - You are about to drop the column `precioUnitario` on the `detallefactura` table. All the data in the column will be lost.
  - You are about to drop the column `totalItem` on the `detallefactura` table. All the data in the column will be lost.
  - You are about to drop the column `fechaFactura` on the `factura` table. All the data in the column will be lost.
  - You are about to drop the column `idCliente` on the `factura` table. All the data in the column will be lost.
  - You are about to drop the column `metodoPago` on the `factura` table. All the data in the column will be lost.
  - You are about to alter the column `subtotal` on the `factura` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Double`.
  - You are about to alter the column `impuesto` on the `factura` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Double`.
  - You are about to alter the column `total` on the `factura` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Double`.
  - You are about to drop the column `diaSemana` on the `horario` table. All the data in the column will be lost.
  - You are about to drop the column `horaFin` on the `horario` table. All the data in the column will be lost.
  - You are about to drop the column `horaInicio` on the `horario` table. All the data in the column will be lost.
  - You are about to drop the column `idSucursal` on the `horario` table. All the data in the column will be lost.
  - You are about to drop the column `fechaNacimiento` on the `mascota` table. All the data in the column will be lost.
  - You are about to drop the column `idCliente` on the `mascota` table. All the data in the column will be lost.
  - You are about to drop the column `TipoMascota` on the `producto` table. All the data in the column will be lost.
  - You are about to drop the column `idCategoria` on the `producto` table. All the data in the column will be lost.
  - You are about to alter the column `precio` on the `producto` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Double`.
  - You are about to drop the column `TipoMascota` on the `servicio` table. All the data in the column will be lost.
  - You are about to drop the column `idSucursal` on the `servicio` table. All the data in the column will be lost.
  - You are about to drop the column `tiempoServicio` on the `servicio` table. All the data in the column will be lost.
  - You are about to alter the column `tarifa` on the `servicio` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Double`.
  - You are about to drop the column `correoElectronico` on the `sucursal` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `usuario` table. All the data in the column will be lost.
  - You are about to drop the column `fechaNacimiento` on the `usuario` table. All the data in the column will be lost.
  - You are about to alter the column `rol` on the `usuario` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(4))` to `Enum(EnumId(0))`.
  - You are about to drop the `categoria` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[correo_electronico]` on the table `Sucursal` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[correo_electronico]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `Condicion` to the `Cita` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Motivo` to the `Cita` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Vacunas` to the `Cita` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fecha_cita` to the `Cita` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hora_cita` to the `Cita` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_cliente` to the `Cita` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_servicio` to the `Cita` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_sucursal` to the `Cita` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_factura` to the `DetalleFactura` table without a default value. This is not possible if the table is not empty.
  - Added the required column `precio_unitario` to the `DetalleFactura` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_item` to the `DetalleFactura` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estado` to the `Factura` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fecha_factura` to the `Factura` table without a default value. This is not possible if the table is not empty.
  - Added the required column `metodo_pago` to the `Factura` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dia_semana` to the `Horario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hora_fin` to the `Horario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hora_inicio` to the `Horario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_sucursal` to the `Horario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `repeticion` to the `Horario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fecha_nacimiento` to the `Mascota` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_cliente` to the `Mascota` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Tipo_mascota` to the `Producto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoria` to the `Producto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Tipo_mascota` to the `Servicio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tiempo_servicio` to the `Servicio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `correo_electronico` to the `Sucursal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `correo_electronico` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fecha_nacimiento` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `cita` DROP FOREIGN KEY `Cita_idCliente_fkey`;

-- DropForeignKey
ALTER TABLE `cita` DROP FOREIGN KEY `Cita_idMascota_fkey`;

-- DropForeignKey
ALTER TABLE `cita` DROP FOREIGN KEY `Cita_idServicio_fkey`;

-- DropForeignKey
ALTER TABLE `cita` DROP FOREIGN KEY `Cita_idSucursal_fkey`;

-- DropForeignKey
ALTER TABLE `detallefactura` DROP FOREIGN KEY `DetalleFactura_idFactura_fkey`;

-- DropForeignKey
ALTER TABLE `detallefactura` DROP FOREIGN KEY `DetalleFactura_idProducto_fkey`;

-- DropForeignKey
ALTER TABLE `detallefactura` DROP FOREIGN KEY `DetalleFactura_idServicio_fkey`;

-- DropForeignKey
ALTER TABLE `factura` DROP FOREIGN KEY `Factura_idCliente_fkey`;

-- DropForeignKey
ALTER TABLE `horario` DROP FOREIGN KEY `Horario_idSucursal_fkey`;

-- DropForeignKey
ALTER TABLE `mascota` DROP FOREIGN KEY `Mascota_idCliente_fkey`;

-- DropForeignKey
ALTER TABLE `producto` DROP FOREIGN KEY `Producto_idCategoria_fkey`;

-- DropForeignKey
ALTER TABLE `servicio` DROP FOREIGN KEY `Servicio_idSucursal_fkey`;

-- DropIndex
DROP INDEX `Sucursal_correoElectronico_key` ON `sucursal`;

-- DropIndex
DROP INDEX `Sucursal_nombre_key` ON `sucursal`;

-- DropIndex
DROP INDEX `Usuario_email_key` ON `usuario`;

-- DropIndex
DROP INDEX `Usuario_nombre_key` ON `usuario`;

-- DropIndex
DROP INDEX `Usuario_telefono_key` ON `usuario`;

-- AlterTable
ALTER TABLE `cita` DROP COLUMN `fechaCita`,
    DROP COLUMN `horaCita`,
    DROP COLUMN `idCliente`,
    DROP COLUMN `idMascota`,
    DROP COLUMN `idServicio`,
    DROP COLUMN `idSucursal`,
    ADD COLUMN `Condicion` VARCHAR(191) NOT NULL,
    ADD COLUMN `Motivo` VARCHAR(191) NOT NULL,
    ADD COLUMN `Vacunas` VARCHAR(191) NOT NULL,
    ADD COLUMN `fecha_cita` DATETIME(3) NOT NULL,
    ADD COLUMN `hora_cita` DATETIME(3) NOT NULL,
    ADD COLUMN `id_cliente` INTEGER NOT NULL,
    ADD COLUMN `id_mascota` INTEGER NULL,
    ADD COLUMN `id_servicio` INTEGER NOT NULL,
    ADD COLUMN `id_sucursal` INTEGER NOT NULL,
    MODIFY `estado` ENUM('Pendiente', 'Confirmada', 'Reprogramada', 'Completada', 'Cancelada', 'No_asistio') NOT NULL;

-- AlterTable
ALTER TABLE `detallefactura` DROP COLUMN `idFactura`,
    DROP COLUMN `idProducto`,
    DROP COLUMN `idServicio`,
    DROP COLUMN `precioUnitario`,
    DROP COLUMN `totalItem`,
    ADD COLUMN `id_factura` INTEGER NOT NULL,
    ADD COLUMN `id_producto` INTEGER NULL,
    ADD COLUMN `id_servicio` INTEGER NULL,
    ADD COLUMN `precio_unitario` DOUBLE NOT NULL,
    ADD COLUMN `total_item` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `factura` DROP COLUMN `fechaFactura`,
    DROP COLUMN `idCliente`,
    DROP COLUMN `metodoPago`,
    ADD COLUMN `estado` ENUM('Proforma', 'Facturada') NOT NULL,
    ADD COLUMN `fecha_factura` DATETIME(3) NOT NULL,
    ADD COLUMN `id_cita` INTEGER NULL,
    ADD COLUMN `metodo_pago` ENUM('Efectivo', 'Tarjeta', 'Transferencia') NOT NULL,
    MODIFY `subtotal` DOUBLE NOT NULL,
    MODIFY `impuesto` DOUBLE NOT NULL,
    MODIFY `total` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `horario` DROP COLUMN `diaSemana`,
    DROP COLUMN `horaFin`,
    DROP COLUMN `horaInicio`,
    DROP COLUMN `idSucursal`,
    ADD COLUMN `bloqueo` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `dia_semana` ENUM('Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo') NOT NULL,
    ADD COLUMN `fecha` DATETIME(3) NULL,
    ADD COLUMN `hora_fin` DATETIME(3) NOT NULL,
    ADD COLUMN `hora_inicio` DATETIME(3) NOT NULL,
    ADD COLUMN `id_sucursal` INTEGER NOT NULL,
    ADD COLUMN `repeticion` ENUM('Ninguno', 'Diario', 'Semanal', 'Mensual') NOT NULL;

-- AlterTable
ALTER TABLE `mascota` DROP COLUMN `fechaNacimiento`,
    DROP COLUMN `idCliente`,
    ADD COLUMN `fecha_nacimiento` DATETIME(3) NOT NULL,
    ADD COLUMN `id_cliente` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `producto` DROP COLUMN `TipoMascota`,
    DROP COLUMN `idCategoria`,
    ADD COLUMN `Tipo_mascota` VARCHAR(191) NOT NULL,
    ADD COLUMN `categoria` VARCHAR(191) NOT NULL,
    MODIFY `precio` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `servicio` DROP COLUMN `TipoMascota`,
    DROP COLUMN `idSucursal`,
    DROP COLUMN `tiempoServicio`,
    ADD COLUMN `Tipo_mascota` VARCHAR(191) NOT NULL,
    ADD COLUMN `tiempo_servicio` DATETIME(3) NOT NULL,
    MODIFY `tarifa` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `sucursal` DROP COLUMN `correoElectronico`,
    ADD COLUMN `correo_electronico` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `usuario` DROP COLUMN `email`,
    DROP COLUMN `fechaNacimiento`,
    ADD COLUMN `correo_electronico` VARCHAR(191) NOT NULL,
    ADD COLUMN `fecha_nacimiento` DATETIME(3) NOT NULL,
    ADD COLUMN `id_sucursal` INTEGER NULL,
    MODIFY `rol` ENUM('cliente', 'encargado', 'administrador') NOT NULL;

-- DropTable
DROP TABLE `categoria`;

-- CreateIndex
CREATE UNIQUE INDEX `Sucursal_correo_electronico_key` ON `Sucursal`(`correo_electronico`);

-- CreateIndex
CREATE UNIQUE INDEX `Usuario_correo_electronico_key` ON `Usuario`(`correo_electronico`);

-- AddForeignKey
ALTER TABLE `Usuario` ADD CONSTRAINT `Usuario_id_sucursal_fkey` FOREIGN KEY (`id_sucursal`) REFERENCES `Sucursal`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mascota` ADD CONSTRAINT `Mascota_id_cliente_fkey` FOREIGN KEY (`id_cliente`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Horario` ADD CONSTRAINT `Horario_id_sucursal_fkey` FOREIGN KEY (`id_sucursal`) REFERENCES `Sucursal`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cita` ADD CONSTRAINT `Cita_id_cliente_fkey` FOREIGN KEY (`id_cliente`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cita` ADD CONSTRAINT `Cita_id_mascota_fkey` FOREIGN KEY (`id_mascota`) REFERENCES `Mascota`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cita` ADD CONSTRAINT `Cita_id_servicio_fkey` FOREIGN KEY (`id_servicio`) REFERENCES `Servicio`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cita` ADD CONSTRAINT `Cita_id_sucursal_fkey` FOREIGN KEY (`id_sucursal`) REFERENCES `Sucursal`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Factura` ADD CONSTRAINT `Factura_id_cita_fkey` FOREIGN KEY (`id_cita`) REFERENCES `Cita`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetalleFactura` ADD CONSTRAINT `DetalleFactura_id_factura_fkey` FOREIGN KEY (`id_factura`) REFERENCES `Factura`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetalleFactura` ADD CONSTRAINT `DetalleFactura_id_producto_fkey` FOREIGN KEY (`id_producto`) REFERENCES `Producto`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetalleFactura` ADD CONSTRAINT `DetalleFactura_id_servicio_fkey` FOREIGN KEY (`id_servicio`) REFERENCES `Servicio`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
