/*
  Warnings:

  - You are about to drop the column `pregunta1` on the `cita` table. All the data in the column will be lost.
  - You are about to drop the column `pregunta2` on the `cita` table. All the data in the column will be lost.
  - You are about to drop the column `pregunta3` on the `cita` table. All the data in the column will be lost.
  - Added the required column `condicion` to the `Cita` table without a default value. This is not possible if the table is not empty.
  - Added the required column `motivo` to the `Cita` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vacunas` to the `Cita` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cita` DROP COLUMN `pregunta1`,
    DROP COLUMN `pregunta2`,
    DROP COLUMN `pregunta3`,
    ADD COLUMN `condicion` VARCHAR(191) NOT NULL,
    ADD COLUMN `motivo` VARCHAR(191) NOT NULL,
    ADD COLUMN `vacunas` VARCHAR(191) NOT NULL;
