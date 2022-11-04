/*
  Warnings:

  - You are about to drop the column `provider_account_id` on the `auth_accounts` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `auth_accounts` table. All the data in the column will be lost.
  - You are about to drop the column `session_token` on the `auth_sessions` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `auth_sessions` table. All the data in the column will be lost.
  - You are about to drop the column `avatar_url` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `email_verified` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `first_name` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `last_name` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `nickname` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[provider,providerAccountId]` on the table `auth_accounts` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[sessionToken]` on the table `auth_sessions` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `providerAccountId` to the `auth_accounts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `auth_accounts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sessionToken` to the `auth_sessions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `auth_sessions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UserPermissionRole" AS ENUM ('admin', 'user');

-- DropForeignKey
ALTER TABLE "auth_accounts" DROP CONSTRAINT "auth_accounts_user_id_fkey";

-- DropForeignKey
ALTER TABLE "auth_sessions" DROP CONSTRAINT "auth_sessions_user_id_fkey";

-- DropIndex
DROP INDEX "auth_accounts_provider_provider_account_id_key";

-- DropIndex
DROP INDEX "auth_sessions_session_token_key";

-- DropIndex
DROP INDEX "users_nickname_key";

-- AlterTable
ALTER TABLE "auth_accounts" DROP COLUMN "provider_account_id",
DROP COLUMN "user_id",
ADD COLUMN     "providerAccountId" TEXT NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "auth_sessions" DROP COLUMN "session_token",
DROP COLUMN "user_id",
ADD COLUMN     "sessionToken" TEXT NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "auth_verification_tokens" ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "identifier" SET DATA TYPE TEXT,
ALTER COLUMN "token" SET DATA TYPE TEXT,
ADD CONSTRAINT "auth_verification_tokens_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "users" DROP COLUMN "avatar_url",
DROP COLUMN "created_at",
DROP COLUMN "email_verified",
DROP COLUMN "first_name",
DROP COLUMN "last_name",
DROP COLUMN "nickname",
DROP COLUMN "updated_at",
ADD COLUMN     "avatarUrl" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "emailVerified" TIMESTAMP(3),
ADD COLUMN     "firstName" TEXT,
ADD COLUMN     "lastName" TEXT,
ADD COLUMN     "password" TEXT,
ADD COLUMN     "role" "UserPermissionRole" NOT NULL DEFAULT 'user',
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "username" TEXT NOT NULL,
ALTER COLUMN "email" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "auth_accounts_provider_providerAccountId_key" ON "auth_accounts"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "auth_sessions_sessionToken_key" ON "auth_sessions"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- AddForeignKey
ALTER TABLE "auth_accounts" ADD CONSTRAINT "auth_accounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "auth_sessions" ADD CONSTRAINT "auth_sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
