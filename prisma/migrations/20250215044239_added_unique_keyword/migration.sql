/*
  Warnings:

  - A unique constraint covering the columns `[userId,word]` on the table `Keyword` will be added. If there are existing duplicate values, this will fail.
  - Made the column `userId` on table `Automation` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `userId` to the `Keyword` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Keyword_automationId_word_key";

-- AlterTable
ALTER TABLE "Automation" ALTER COLUMN "userId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Keyword" ADD COLUMN     "userId" UUID NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Keyword_userId_word_key" ON "Keyword"("userId", "word");

-- AddForeignKey
ALTER TABLE "Keyword" ADD CONSTRAINT "Keyword_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
