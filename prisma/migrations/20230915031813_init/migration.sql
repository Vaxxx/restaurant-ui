-- CreateTable
CREATE TABLE `Category` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `title` VARCHAR(191) NOT NULL,
    `desc` VARCHAR(191) NOT NULL,
    `color` VARCHAR(191) NOT NULL,
    `img` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Category_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Product` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `title` VARCHAR(191) NOT NULL,
    `desc` VARCHAR(191) NOT NULL,
    `color` VARCHAR(191) NOT NULL,
    `img` VARCHAR(191) NULL,
    `price` DECIMAL(65, 30) NOT NULL,
    `isFeatured` BOOLEAN NOT NULL DEFAULT false,
    `options` JSON NULL,
    `catSlug` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Order` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `price` DECIMAL(65, 30) NOT NULL,
    `products` JSON NULL,
    `status` VARCHAR(191) NOT NULL,
    `intent_id` VARCHAR(191) NULL,

    UNIQUE INDEX `Order_intent_id_key`(`intent_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_catSlug_fkey` FOREIGN KEY (`catSlug`) REFERENCES `Category`(`slug`) ON DELETE RESTRICT ON UPDATE CASCADE;
