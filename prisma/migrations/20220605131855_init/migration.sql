/*
  Warnings:

  - You are about to drop the column `id` on the `product_has_order` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `product_has_size` table. All the data in the column will be lost.
  - The primary key for the `promotion_has_product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `promotion_has_product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "product_has_order" DROP COLUMN "id";

-- AlterTable
ALTER TABLE "product_has_size" DROP COLUMN "id";

-- AlterTable
ALTER TABLE "promotion_has_product" DROP CONSTRAINT "promotion_has_product_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "promotion_has_product_pkey" PRIMARY KEY ("fk_id_product", "fk_id_promotion");
