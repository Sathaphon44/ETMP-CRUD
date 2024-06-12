-- CreateTable
CREATE TABLE `user` (
    `id` VARCHAR(200) NOT NULL,
    `email` VARCHAR(200) NOT NULL,
    `username` VARCHAR(200) NOT NULL,
    `password` VARCHAR(255) NULL,
    `create_at` TIMESTAMP(0) NULL,
    `update_at` TIMESTAMP(0) NULL,
    `role` ENUM('user', 'admin') NULL,

    UNIQUE INDEX `id`(`id`),
    UNIQUE INDEX `email`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
