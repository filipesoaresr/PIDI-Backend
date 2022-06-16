/*
  Warnings:

  - You are about to drop the column `products` on the `promotion` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "promotion" DROP COLUMN "products";

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_id_fkey" FOREIGN KEY ("id") REFERENCES "promotion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
