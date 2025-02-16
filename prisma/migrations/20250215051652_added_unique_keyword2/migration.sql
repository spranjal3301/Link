/*
  Warnings:

  - You are about to drop the column `userId` on the `Keyword` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[clerkId,word]` on the table `Keyword` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `clerkId` to the `Keyword` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Keyword" DROP CONSTRAINT "Keyword_userId_fkey";

-- DropIndex
DROP INDEX "Keyword_userId_word_key";

-- AlterTable
ALTER TABLE "Keyword" DROP COLUMN "userId",
ADD COLUMN     "clerkId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Keyword_clerkId_word_key" ON "Keyword"("clerkId", "word");

-- AddForeignKey
ALTER TABLE "Keyword" ADD CONSTRAINT "Keyword_clerkId_fkey" FOREIGN KEY ("clerkId") REFERENCES "User"("clerkId") ON DELETE CASCADE ON UPDATE CASCADE;
