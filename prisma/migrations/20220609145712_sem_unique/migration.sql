-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(60) NOT NULL,
    "birth_date" DATE,
    "phone" VARCHAR(9),
    "email" VARCHAR(45) NOT NULL,
    "cpf" VARCHAR(11) NOT NULL,
    "sex" VARCHAR(15),
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "role" VARCHAR(12) NOT NULL,
    "username" TEXT NOT NULL,
    "password" VARCHAR(90) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product" (
    "id" TEXT NOT NULL,
    "product_type" VARCHAR(25) NOT NULL,
    "collection" VARCHAR(40),
    "name" VARCHAR(50) NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "value" REAL NOT NULL,
    "pp" INTEGER,
    "p" INTEGER,
    "m" INTEGER,
    "g" INTEGER,
    "gg" INTEGER,
    "id_promotion" TEXT,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "promotion" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(30) NOT NULL,
    "start_date" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end_date" DATE,
    "discount" VARCHAR(15),
    "products" TEXT[],

    CONSTRAINT "promotion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "promotion_has_product" (
    "fk_id_product" TEXT NOT NULL,
    "fk_id_promotion" TEXT NOT NULL,

    CONSTRAINT "promotion_has_product_pkey" PRIMARY KEY ("fk_id_product","fk_id_promotion")
);

-- CreateTable
CREATE TABLE "payment_options" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(20) NOT NULL,
    "flag" VARCHAR(20),
    "installment" VARCHAR(20) DEFAULT E'Sem Parcelamento',

    CONSTRAINT "payment_options_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order" (
    "id" TEXT NOT NULL,
    "date_created" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fk_id_payment_options" TEXT NOT NULL,
    "fk_id_user" TEXT NOT NULL,
    "date_submitted" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "is_open" BOOLEAN NOT NULL DEFAULT true,
    "total_value" REAL NOT NULL DEFAULT 0,

    CONSTRAINT "order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_has_order" (
    "pp" INTEGER,
    "p" INTEGER,
    "m" INTEGER,
    "g" INTEGER,
    "gg" INTEGER,
    "order_product_value" REAL NOT NULL DEFAULT 0,
    "fk_id_product" TEXT NOT NULL,
    "fk_id_order" TEXT NOT NULL,
    "hasPromotion" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "product_has_order_pkey" PRIMARY KEY ("fk_id_product","fk_id_order")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_cpf_key" ON "user"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "order_fk_id_payment_options_key" ON "order"("fk_id_payment_options");

-- AddForeignKey
ALTER TABLE "promotion_has_product" ADD CONSTRAINT "promotion_has_product_fk_id_product_fkey" FOREIGN KEY ("fk_id_product") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "promotion_has_product" ADD CONSTRAINT "promotion_has_product_fk_id_promotion_fkey" FOREIGN KEY ("fk_id_promotion") REFERENCES "promotion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_fk_id_user_fkey" FOREIGN KEY ("fk_id_user") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_fk_id_payment_options_fkey" FOREIGN KEY ("fk_id_payment_options") REFERENCES "payment_options"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_has_order" ADD CONSTRAINT "product_has_order_fk_id_product_fkey" FOREIGN KEY ("fk_id_product") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_has_order" ADD CONSTRAINT "product_has_order_fk_id_order_fkey" FOREIGN KEY ("fk_id_order") REFERENCES "order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
