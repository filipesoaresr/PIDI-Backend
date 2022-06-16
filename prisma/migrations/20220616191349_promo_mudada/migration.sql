-- DropForeignKey
ALTER TABLE "product" DROP CONSTRAINT "product_id_fkey";

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_id_promotion_fkey" FOREIGN KEY ("id_promotion") REFERENCES "promotion"("id") ON DELETE SET NULL ON UPDATE CASCADE;
