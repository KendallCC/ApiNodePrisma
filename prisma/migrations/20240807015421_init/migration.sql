/*
  Warnings:

  - You are about to drop the `serviciocita` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `id_servicio` to the `Cita` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `serviciocita` DROP FOREIGN KEY `ServicioCita_citaId_fkey`;

-- DropForeignKey
ALTER TABLE `serviciocita` DROP FOREIGN KEY `ServicioCita_servicioId_fkey`;

-- AlterTable
ALTER TABLE `cita` ADD COLUMN `id_servicio` INTEGER NOT NULL;

-- DropTable
DROP TABLE `serviciocita`;

-- AddForeignKey
ALTER TABLE `Cita` ADD CONSTRAINT `Cita_id_servicio_fkey` FOREIGN KEY (`id_servicio`) REFERENCES `Servicio`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
