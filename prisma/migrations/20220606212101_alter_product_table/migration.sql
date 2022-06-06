/*
  Warnings:

  - You are about to drop the `product_has_size` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `size` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "product_has_size" DROP CONSTRAINT "product_has_size_fk_id_product_fkey";

-- DropForeignKey
ALTER TABLE "product_has_size" DROP CONSTRAINT "product_has_size_fk_id_size_fkey";

-- AlterTable
ALTER TABLE "product" ADD COLUMN     "g" INTEGER,
ADD COLUMN     "gg" INTEGER,
ADD COLUMN     "m" INTEGER,
ADD COLUMN     "p" INTEGER,
ADD COLUMN     "pp" INTEGER;

-- DropTable
DROP TABLE "product_has_size";

-- DropTable
DROP TABLE "size";
