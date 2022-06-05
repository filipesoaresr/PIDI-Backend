/*
  Warnings:

  - You are about to alter the column `name` on the `payment_options` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(20)`.
  - You are about to alter the column `flag` on the `payment_options` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(20)`.
  - You are about to alter the column `installment` on the `payment_options` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(20)`.
  - You are about to drop the column `g` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `gg` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `m` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `p` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `pp` on the `product` table. All the data in the column will be lost.
  - You are about to alter the column `product_type` on the `product` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(25)`.
  - You are about to alter the column `collection` on the `product` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(40)`.
  - You are about to alter the column `name` on the `product` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - The primary key for the `product_has_order` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `product_has_order` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to alter the column `name` on the `promotion` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(30)`.
  - You are about to alter the column `discount` on the `promotion` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(15)`.
  - You are about to alter the column `name` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(60)`.
  - You are about to alter the column `phone` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(9)`.
  - You are about to alter the column `email` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(45)`.
  - You are about to alter the column `cpf` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(11)`.
  - You are about to alter the column `sex` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(15)`.
  - You are about to alter the column `role` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(12)`.
  - You are about to alter the column `password` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(20)`.
  - A unique constraint covering the columns `[cpf]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `qtdOrder` to the `product_has_order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "order" ALTER COLUMN "date_created" SET DATA TYPE DATE;

-- AlterTable
ALTER TABLE "payment_options" ALTER COLUMN "name" SET DATA TYPE VARCHAR(20),
ALTER COLUMN "flag" SET DATA TYPE VARCHAR(20),
ALTER COLUMN "installment" SET DATA TYPE VARCHAR(20);

-- AlterTable
ALTER TABLE "product" DROP COLUMN "g",
DROP COLUMN "gg",
DROP COLUMN "m",
DROP COLUMN "p",
DROP COLUMN "pp",
ALTER COLUMN "product_type" SET DATA TYPE VARCHAR(25),
ALTER COLUMN "collection" SET DATA TYPE VARCHAR(40),
ALTER COLUMN "name" SET DATA TYPE VARCHAR(50);

-- AlterTable
ALTER TABLE "product_has_order" DROP CONSTRAINT "product_has_order_pkey",
ADD COLUMN     "hasPromotion" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "qtdOrder" INTEGER NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "product_has_order_pkey" PRIMARY KEY ("fk_id_product", "fk_id_order");

-- AlterTable
ALTER TABLE "promotion" ALTER COLUMN "name" SET DATA TYPE VARCHAR(30),
ALTER COLUMN "discount" SET DATA TYPE VARCHAR(15);

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "name" SET DATA TYPE VARCHAR(60),
ALTER COLUMN "birth_date" SET DATA TYPE DATE,
ALTER COLUMN "phone" SET DATA TYPE VARCHAR(9),
ALTER COLUMN "email" SET DATA TYPE VARCHAR(45),
ALTER COLUMN "cpf" SET DATA TYPE VARCHAR(11),
ALTER COLUMN "sex" SET DATA TYPE VARCHAR(15),
ALTER COLUMN "role" SET DATA TYPE VARCHAR(12),
ALTER COLUMN "password" SET DATA TYPE VARCHAR(20);

-- CreateTable
CREATE TABLE "size" (
    "id" TEXT NOT NULL,
    "productSize" VARCHAR(13) NOT NULL,

    CONSTRAINT "size_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_has_size" (
    "id" SERIAL NOT NULL,
    "fk_id_product" TEXT NOT NULL,
    "fk_id_size" TEXT NOT NULL,
    "qtd" INTEGER NOT NULL,

    CONSTRAINT "product_has_size_pkey" PRIMARY KEY ("fk_id_product","fk_id_size")
);

-- CreateTable
CREATE TABLE "promotion_has_product" (
    "id" TEXT NOT NULL,
    "fk_id_product" TEXT NOT NULL,
    "fk_id_promotion" TEXT NOT NULL,

    CONSTRAINT "promotion_has_product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sale" (
    "id" TEXT NOT NULL,
    "date_submitted" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fk_id_order" TEXT NOT NULL,

    CONSTRAINT "sale_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_cpf_key" ON "user"("cpf");

-- AddForeignKey
ALTER TABLE "product_has_size" ADD CONSTRAINT "product_has_size_fk_id_product_fkey" FOREIGN KEY ("fk_id_product") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_has_size" ADD CONSTRAINT "product_has_size_fk_id_size_fkey" FOREIGN KEY ("fk_id_size") REFERENCES "size"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "promotion_has_product" ADD CONSTRAINT "promotion_has_product_fk_id_product_fkey" FOREIGN KEY ("fk_id_product") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "promotion_has_product" ADD CONSTRAINT "promotion_has_product_fk_id_promotion_fkey" FOREIGN KEY ("fk_id_promotion") REFERENCES "promotion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sale" ADD CONSTRAINT "sale_fk_id_order_fkey" FOREIGN KEY ("fk_id_order") REFERENCES "order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
