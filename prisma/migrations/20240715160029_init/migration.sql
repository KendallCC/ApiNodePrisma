-- DropForeignKey
ALTER TABLE `cita` DROP FOREIGN KEY `Cita_id_cliente_fkey`;

-- DropForeignKey
ALTER TABLE `cita` DROP FOREIGN KEY `Cita_id_mascota_fkey`;

-- DropForeignKey
ALTER TABLE `cita` DROP FOREIGN KEY `Cita_id_servicio_fkey`;

-- DropForeignKey
ALTER TABLE `cita` DROP FOREIGN KEY `Cita_id_sucursal_fkey`;

-- DropForeignKey
ALTER TABLE `detallefactura` DROP FOREIGN KEY `DetalleFactura_id_factura_fkey`;

-- DropForeignKey
ALTER TABLE `detallefactura` DROP FOREIGN KEY `DetalleFactura_id_producto_fkey`;

-- DropForeignKey
ALTER TABLE `detallefactura` DROP FOREIGN KEY `DetalleFactura_id_servicio_fkey`;

-- DropForeignKey
ALTER TABLE `factura` DROP FOREIGN KEY `Factura_id_cita_fkey`;

-- DropForeignKey
ALTER TABLE `horario` DROP FOREIGN KEY `Horario_id_sucursal_fkey`;

-- DropForeignKey
ALTER TABLE `mascota` DROP FOREIGN KEY `Mascota_id_cliente_fkey`;

-- DropForeignKey
ALTER TABLE `producto` DROP FOREIGN KEY `Producto_id_categoria_fkey`;

-- DropForeignKey
ALTER TABLE `usuario` DROP FOREIGN KEY `Usuario_id_sucursal_fkey`;

-- AddForeignKey
ALTER TABLE `Usuario` ADD CONSTRAINT `Usuario_id_sucursal_fkey` FOREIGN KEY (`id_sucursal`) REFERENCES `Sucursal`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mascota` ADD CONSTRAINT `Mascota_id_cliente_fkey` FOREIGN KEY (`id_cliente`) REFERENCES `Usuario`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Producto` ADD CONSTRAINT `Producto_id_categoria_fkey` FOREIGN KEY (`id_categoria`) REFERENCES `Categoria`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Horario` ADD CONSTRAINT `Horario_id_sucursal_fkey` FOREIGN KEY (`id_sucursal`) REFERENCES `Sucursal`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cita` ADD CONSTRAINT `Cita_id_cliente_fkey` FOREIGN KEY (`id_cliente`) REFERENCES `Usuario`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cita` ADD CONSTRAINT `Cita_id_mascota_fkey` FOREIGN KEY (`id_mascota`) REFERENCES `Mascota`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cita` ADD CONSTRAINT `Cita_id_servicio_fkey` FOREIGN KEY (`id_servicio`) REFERENCES `Servicio`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cita` ADD CONSTRAINT `Cita_id_sucursal_fkey` FOREIGN KEY (`id_sucursal`) REFERENCES `Sucursal`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Factura` ADD CONSTRAINT `Factura_id_cita_fkey` FOREIGN KEY (`id_cita`) REFERENCES `Cita`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetalleFactura` ADD CONSTRAINT `DetalleFactura_id_factura_fkey` FOREIGN KEY (`id_factura`) REFERENCES `Factura`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetalleFactura` ADD CONSTRAINT `DetalleFactura_id_producto_fkey` FOREIGN KEY (`id_producto`) REFERENCES `Producto`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetalleFactura` ADD CONSTRAINT `DetalleFactura_id_servicio_fkey` FOREIGN KEY (`id_servicio`) REFERENCES `Servicio`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
