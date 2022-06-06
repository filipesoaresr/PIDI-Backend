/*
  Warnings:

  - The primary key for the `product_has_size` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "product_has_size" DROP CONSTRAINT "product_has_size_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "product_has_size_pkey" PRIMARY KEY ("id");
