/*
  Warnings:

  - You are about to drop the column `id_servicio` on the `cita` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `cita` DROP FOREIGN KEY `Cita_id_servicio_fkey`;

-- AlterTable
ALTER TABLE `cita` DROP COLUMN `id_servicio`;

-- CreateTable
CREATE TABLE `ServicioCita` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `citaId` INTEGER NOT NULL,
    `servicioId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ServicioCita` ADD CONSTRAINT `ServicioCita_citaId_fkey` FOREIGN KEY (`citaId`) REFERENCES `Cita`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ServicioCita` ADD CONSTRAINT `ServicioCita_servicioId_fkey` FOREIGN KEY (`servicioId`) REFERENCES `Servicio`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
