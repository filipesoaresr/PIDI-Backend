-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "birth_date" TIMESTAMP(3) NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "sex" TEXT,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "role" TEXT NOT NULL,
    "user_name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product" (
    "id" TEXT NOT NULL,
    "product_type" TEXT NOT NULL,
    "collection" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "pp" TEXT,
    "p" TEXT,
    "m" TEXT,
    "g" TEXT,
    "gg" TEXT,
    "id_promotion" TEXT,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "promotion" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end_date" TIMESTAMP(3),
    "discount" TEXT,

    CONSTRAINT "promotion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payment_options" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "flag" TEXT,
    "installment" TEXT DEFAULT E'Sem Parcelamento',

    CONSTRAINT "payment_options_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order" (
    "id" TEXT NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fk_id_user" TEXT NOT NULL,
    "fk_id_payment_options" TEXT NOT NULL,
    "is_open" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_has_order" (
    "id" TEXT NOT NULL,
    "fk_id_product" TEXT NOT NULL,
    "fk_id_order" TEXT NOT NULL,

    CONSTRAINT "product_has_order_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_user_name_key" ON "user"("user_name");

-- CreateIndex
CREATE UNIQUE INDEX "order_fk_id_payment_options_key" ON "order"("fk_id_payment_options");

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_id_promotion_fkey" FOREIGN KEY ("id_promotion") REFERENCES "promotion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_fk_id_user_fkey" FOREIGN KEY ("fk_id_user") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_fk_id_payment_options_fkey" FOREIGN KEY ("fk_id_payment_options") REFERENCES "payment_options"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_has_order" ADD CONSTRAINT "product_has_order_fk_id_product_fkey" FOREIGN KEY ("fk_id_product") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_has_order" ADD CONSTRAINT "product_has_order_fk_id_order_fkey" FOREIGN KEY ("fk_id_order") REFERENCES "order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
