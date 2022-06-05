/*
  Warnings:

  - The primary key for the `product_has_size` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `size` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `size` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `fk_id_size` on the `product_has_size` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "product_has_size" DROP CONSTRAINT "product_has_size_fk_id_size_fkey";

-- AlterTable
ALTER TABLE "product_has_size" DROP CONSTRAINT "product_has_size_pkey",
DROP COLUMN "fk_id_size",
ADD COLUMN     "fk_id_size" INTEGER NOT NULL,
ADD CONSTRAINT "product_has_size_pkey" PRIMARY KEY ("fk_id_product", "fk_id_size");

-- AlterTable
ALTER TABLE "size" DROP CONSTRAINT "size_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "size_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "product_has_size" ADD CONSTRAINT "product_has_size_fk_id_size_fkey" FOREIGN KEY ("fk_id_size") REFERENCES "size"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
