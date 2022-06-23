/*
  Warnings:

  - You are about to drop the column `products` on the `promotion` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "product" ALTER COLUMN "g" DROP DEFAULT,
ALTER COLUMN "gg" DROP DEFAULT,
ALTER COLUMN "m" DROP DEFAULT,
ALTER COLUMN "p" DROP DEFAULT,
ALTER COLUMN "pp" DROP DEFAULT;

-- AlterTable
ALTER TABLE "promotion" DROP COLUMN "products";

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_id_promotion_fkey" FOREIGN KEY ("id_promotion") REFERENCES "promotion"("id") ON DELETE SET NULL ON UPDATE CASCADE;
