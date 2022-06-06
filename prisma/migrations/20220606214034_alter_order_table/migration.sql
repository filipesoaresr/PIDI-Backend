/*
  Warnings:

  - You are about to drop the column `qtdOrder` on the `product_has_order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "product_has_order" DROP COLUMN "qtdOrder",
ADD COLUMN     "g" INTEGER,
ADD COLUMN     "gg" INTEGER,
ADD COLUMN     "m" INTEGER,
ADD COLUMN     "p" INTEGER,
ADD COLUMN     "pp" INTEGER;
