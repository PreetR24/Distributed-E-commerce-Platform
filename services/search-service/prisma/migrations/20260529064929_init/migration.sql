-- CreateTable
CREATE TABLE "ProductSearch" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "categoryId" TEXT NOT NULL,
    "categoryName" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProductSearch_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ProductSearch_name_idx" ON "ProductSearch"("name");

-- CreateIndex
CREATE INDEX "ProductSearch_categoryName_idx" ON "ProductSearch"("categoryName");

-- CreateIndex
CREATE INDEX "ProductSearch_price_idx" ON "ProductSearch"("price");
