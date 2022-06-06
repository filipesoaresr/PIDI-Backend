-- DropForeignKey
ALTER TABLE "product" DROP CONSTRAINT "product_id_promotion_fkey";

-- AlterTable
ALTER TABLE "promotion" ADD COLUMN     "products" TEXT[];
