/*
  Warnings:

  - The primary key for the `member` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `member` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `memberImage` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `memberImage` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `memberInfo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `memberInfo` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "member" DROP CONSTRAINT "member_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "member_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "memberImage" DROP CONSTRAINT "memberImage_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "memberImage_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "memberInfo" DROP CONSTRAINT "memberInfo_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "memberInfo_pkey" PRIMARY KEY ("id");
