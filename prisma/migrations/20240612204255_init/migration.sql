/*
  Warnings:

  - Made the column `password` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `create_at` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `update_at` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `role` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `password` VARCHAR(255) NOT NULL,
    MODIFY `create_at` TIMESTAMP(0) NOT NULL,
    MODIFY `update_at` TIMESTAMP(0) NOT NULL,
    MODIFY `role` ENUM('user', 'admin') NOT NULL DEFAULT 'user';
