-- CreateTable
CREATE TABLE "SearchAnalytics" (
    "id" TEXT NOT NULL,
    "searchTerm" TEXT NOT NULL,
    "totalSearches" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SearchAnalytics_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "SearchAnalytics_totalSearches_idx" ON "SearchAnalytics"("totalSearches");

-- CreateIndex
CREATE UNIQUE INDEX "SearchAnalytics_searchTerm_key" ON "SearchAnalytics"("searchTerm");
