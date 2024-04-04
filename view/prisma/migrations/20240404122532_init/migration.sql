/*
  Warnings:

  - The primary key for the `color` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `id` on the `color` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "color" DROP CONSTRAINT "color_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" INTEGER NOT NULL,
ADD CONSTRAINT "color_pkey" PRIMARY KEY ("id");
