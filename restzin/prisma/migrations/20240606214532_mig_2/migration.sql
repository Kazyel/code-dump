/*
  Warnings:

  - You are about to drop the column `price` on the `Product` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id,userId]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "price";

-- CreateIndex
CREATE UNIQUE INDEX "Product_id_userId_key" ON "Product"("id", "userId");
