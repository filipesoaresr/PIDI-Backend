-- DropForeignKey
ALTER TABLE "product_has_order" DROP CONSTRAINT "product_has_order_fk_id_order_fkey";

-- AddForeignKey
ALTER TABLE "product_has_order" ADD CONSTRAINT "product_has_order_fk_id_order_fkey" FOREIGN KEY ("fk_id_order") REFERENCES "order"("id") ON DELETE CASCADE ON UPDATE CASCADE;
