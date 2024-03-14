/*
  Warnings:

  - Changed the type of `icon` on the `Task` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `status` on the `Task` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('IN_PROGRESS', 'COMPLETED', 'TODO', 'WONT_DO');

-- CreateEnum
CREATE TYPE "Icon" AS ENUM ('ALARM_CLOCK', 'WEIGHT_LIFT', 'BOOK', 'COFFEE_CUP');

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "icon",
ADD COLUMN     "icon" "Icon" NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "Status" NOT NULL;
