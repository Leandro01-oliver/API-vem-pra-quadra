-- CreateTable
CREATE TABLE `tb_user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `image` VARCHAR(200) NOT NULL,
    `name` VARCHAR(250) NOT NULL,
    `email` VARCHAR(200) NOT NULL,
    `nick_name` VARCHAR(100) NOT NULL,
    `tel` VARCHAR(14) NOT NULL,
    `type_permission` VARCHAR(18) NOT NULL,
    `active` BOOLEAN NULL DEFAULT true,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NULL,

    UNIQUE INDEX `tb_user_email_key`(`email`),
    UNIQUE INDEX `tb_user_nick_name_key`(`nick_name`),
    UNIQUE INDEX `tb_user_tel_key`(`tel`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_event` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `image` VARCHAR(200) NOT NULL,
    `start_date` VARCHAR(10) NOT NULL,
    `end_date` VARCHAR(10) NULL,
    `start_hour` VARCHAR(5) NOT NULL,
    `end_hour` VARCHAR(5) NULL,
    `title` VARCHAR(150) NOT NULL,
    `description` VARCHAR(150) NOT NULL,
    `cep` VARCHAR(20) NULL,
    `district` VARCHAR(150) NOT NULL,
    `type_category` VARCHAR(150) NOT NULL,
    `active` BOOLEAN NULL DEFAULT true,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NULL,
    `userId` INTEGER NOT NULL,

    UNIQUE INDEX `tb_event_title_key`(`title`),
    UNIQUE INDEX `tb_event_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_comment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(150) NOT NULL,
    `active` BOOLEAN NULL DEFAULT true,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NULL,
    `eventId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_like` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `active` BOOLEAN NULL DEFAULT true,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NULL,
    `eventId` INTEGER NOT NULL,

    UNIQUE INDEX `tb_like_eventId_key`(`eventId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_participant` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `active` BOOLEAN NULL DEFAULT true,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NULL,
    `userId` INTEGER NOT NULL,
    `eventId` INTEGER NOT NULL,

    UNIQUE INDEX `tb_participant_eventId_key`(`eventId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tb_event` ADD CONSTRAINT `tb_event_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `tb_user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_comment` ADD CONSTRAINT `tb_comment_eventId_fkey` FOREIGN KEY (`eventId`) REFERENCES `tb_event`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_like` ADD CONSTRAINT `tb_like_eventId_fkey` FOREIGN KEY (`eventId`) REFERENCES `tb_event`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_participant` ADD CONSTRAINT `tb_participant_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `tb_user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_participant` ADD CONSTRAINT `tb_participant_eventId_fkey` FOREIGN KEY (`eventId`) REFERENCES `tb_event`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
