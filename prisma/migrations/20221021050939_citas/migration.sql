-- CreateTable
CREATE TABLE `especialidad` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(100) NOT NULL,
    `descripcion` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `especialidad_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `medicos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(50) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `especialidad_id` INTEGER NOT NULL,

    UNIQUE INDEX `medicos_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `usuario` VARCHAR(50) NULL,
    `correo` VARCHAR(50) NOT NULL,
    `password` VARCHAR(191) NULL,
    `hashgen` VARCHAR(200) NULL,

    UNIQUE INDEX `usuarios_id_key`(`id`),
    UNIQUE INDEX `usuarios_correo_key`(`correo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `reservas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipocita` ENUM('PRESENCIAL', 'TELECONSULTA') NOT NULL,
    `fechcita` DATETIME(3) NOT NULL,
    `cliente_id` INTEGER NOT NULL,
    `especialidad_id` INTEGER NOT NULL,
    `importe` DECIMAL(65, 30) NOT NULL,

    UNIQUE INDEX `reservas_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `medicos` ADD CONSTRAINT `medicos_especialidad_id_fkey` FOREIGN KEY (`especialidad_id`) REFERENCES `especialidad`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reservas` ADD CONSTRAINT `reservas_especialidad_id_fkey` FOREIGN KEY (`especialidad_id`) REFERENCES `especialidad`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reservas` ADD CONSTRAINT `reservas_cliente_id_fkey` FOREIGN KEY (`cliente_id`) REFERENCES `medicos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
