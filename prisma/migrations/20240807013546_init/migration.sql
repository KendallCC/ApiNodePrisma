/*
  Warnings:

  - You are about to drop the column `id_servicio` on the `cita` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `cita` DROP FOREIGN KEY `Cita_id_servicio_fkey`;

-- AlterTable
ALTER TABLE `cita` DROP COLUMN `id_servicio`;

-- CreateTable
CREATE TABLE `CitaServicio` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_cita` INTEGER NOT NULL,
    `id_servicio` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CitaServicio` ADD CONSTRAINT `CitaServicio_id_cita_fkey` FOREIGN KEY (`id_cita`) REFERENCES `Cita`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CitaServicio` ADD CONSTRAINT `CitaServicio_id_servicio_fkey` FOREIGN KEY (`id_servicio`) REFERENCES `Servicio`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
