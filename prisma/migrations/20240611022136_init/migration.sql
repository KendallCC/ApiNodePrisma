/*
  Warnings:

  - You are about to drop the column `Condicion` on the `cita` table. All the data in the column will be lost.
  - You are about to drop the column `Motivo` on the `cita` table. All the data in the column will be lost.
  - You are about to drop the column `Vacunas` on the `cita` table. All the data in the column will be lost.
  - You are about to drop the column `categoria` on the `producto` table. All the data in the column will be lost.
  - Added the required column `pregunta1` to the `Cita` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pregunta2` to the `Cita` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pregunta3` to the `Cita` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_categoria` to the `Producto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cita` DROP COLUMN `Condicion`,
    DROP COLUMN `Motivo`,
    DROP COLUMN `Vacunas`,
    ADD COLUMN `pregunta1` VARCHAR(191) NOT NULL,
    ADD COLUMN `pregunta2` VARCHAR(191) NOT NULL,
    ADD COLUMN `pregunta3` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `producto` DROP COLUMN `categoria`,
    ADD COLUMN `id_categoria` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Categoria` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Producto` ADD CONSTRAINT `Producto_id_categoria_fkey` FOREIGN KEY (`id_categoria`) REFERENCES `Categoria`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
