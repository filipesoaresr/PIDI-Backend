/*
  Warnings:

  - You are about to alter the column `password` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(200)` to `VarChar(90)`.
  - You are about to drop the `sale` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "sale" DROP CONSTRAINT "sale_fk_id_order_fkey";

-- AlterTable
ALTER TABLE "order" ADD COLUMN     "date_submitted" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "total_value" REAL NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "product" ALTER COLUMN "collection" DROP NOT NULL,
ALTER COLUMN "value" SET DATA TYPE REAL;

-- AlterTable
ALTER TABLE "product_has_order" ADD COLUMN     "order_product_value" REAL NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "promotion" ALTER COLUMN "start_date" SET DATA TYPE DATE,
ALTER COLUMN "end_date" SET DATA TYPE DATE;

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "phone" DROP NOT NULL,
ALTER COLUMN "password" SET DATA TYPE VARCHAR(90);

-- DropTable
DROP TABLE "sale";
