import { MigrationInterface, QueryRunner } from "typeorm";

export class RemovedUniqueProductIndex1725201051794 implements MigrationInterface {
    name = 'RemovedUniqueProductIndex1725201051794'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_26c9336d231c4e90419a5954bd\` ON \`Products\``);
        await queryRunner.query(`ALTER TABLE \`clients\` CHANGE \`description\` \`description\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`clients\` CHANGE \`createdAt\` \`createdAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`clients\` CHANGE \`phone\` \`phone\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`supplier\` CHANGE \`contactPhone\` \`contactPhone\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`supplier\` CHANGE \`address\` \`address\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`supplier\` CHANGE \`city\` \`city\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`supplier\` CHANGE \`notes\` \`notes\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`detail_order\` DROP FOREIGN KEY \`FK_28c643f280d3f04dd8d53c4b906\``);
        await queryRunner.query(`ALTER TABLE \`detail_order\` DROP FOREIGN KEY \`FK_4c3eb3ee75d81ef599c73aa396b\``);
        await queryRunner.query(`ALTER TABLE \`detail_order\` CHANGE \`orderId\` \`orderId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`detail_order\` CHANGE \`productId\` \`productId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`order\` DROP FOREIGN KEY \`FK_caabe91507b3379c7ba73637b84\``);
        await queryRunner.query(`ALTER TABLE \`order\` CHANGE \`createdAt\` \`createdAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`order\` CHANGE \`userId\` \`userId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`sells\` DROP FOREIGN KEY \`FK_49446dbb5033126e1fd64d32866\``);
        await queryRunner.query(`ALTER TABLE \`sells\` DROP FOREIGN KEY \`FK_1aa07dca0e510a95b9723d5b4d9\``);
        await queryRunner.query(`ALTER TABLE \`sells\` CHANGE \`sellDate\` \`sellDate\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`sells\` CHANGE \`idUsuario\` \`idUsuario\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`sells\` CHANGE \`idCliente\` \`idCliente\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`SellDetail\` DROP FOREIGN KEY \`FK_d0abdd4eff181f8566f10ca8033\``);
        await queryRunner.query(`ALTER TABLE \`SellDetail\` DROP FOREIGN KEY \`FK_80a3525a23dd7f5d3052f02d2a3\``);
        await queryRunner.query(`ALTER TABLE \`SellDetail\` CHANGE \`idProducto\` \`idProducto\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`SellDetail\` CHANGE \`idVenta\` \`idVenta\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`categories\` CHANGE \`description\` \`description\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`Products\` DROP FOREIGN KEY \`FK_c31435184b77187af3e45d35d46\``);
        await queryRunner.query(`ALTER TABLE \`Products\` DROP FOREIGN KEY \`FK_ee8bfb0d819ec44bdac86bc7aa1\``);
        await queryRunner.query(`ALTER TABLE \`Products\` DROP FOREIGN KEY \`FK_e763e61479d5a20471c7f2954fa\``);
        await queryRunner.query(`ALTER TABLE \`Products\` CHANGE \`description\` \`description\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`Products\` CHANGE \`idCategory\` \`idCategory\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`Products\` CHANGE \`addedBy\` \`addedBy\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`Products\` CHANGE \`supplierId\` \`supplierId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`permissions\` CHANGE \`description\` \`description\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`roles\` CHANGE \`description\` \`description\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`createdAt\` \`createdAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`phone\` \`phone\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`detail_order\` ADD CONSTRAINT \`FK_28c643f280d3f04dd8d53c4b906\` FOREIGN KEY (\`orderId\`) REFERENCES \`order\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`detail_order\` ADD CONSTRAINT \`FK_4c3eb3ee75d81ef599c73aa396b\` FOREIGN KEY (\`productId\`) REFERENCES \`Products\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD CONSTRAINT \`FK_caabe91507b3379c7ba73637b84\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`sells\` ADD CONSTRAINT \`FK_49446dbb5033126e1fd64d32866\` FOREIGN KEY (\`idUsuario\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`sells\` ADD CONSTRAINT \`FK_1aa07dca0e510a95b9723d5b4d9\` FOREIGN KEY (\`idCliente\`) REFERENCES \`clients\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`SellDetail\` ADD CONSTRAINT \`FK_d0abdd4eff181f8566f10ca8033\` FOREIGN KEY (\`idProducto\`) REFERENCES \`Products\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`SellDetail\` ADD CONSTRAINT \`FK_80a3525a23dd7f5d3052f02d2a3\` FOREIGN KEY (\`idVenta\`) REFERENCES \`sells\`(\`idSell\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Products\` ADD CONSTRAINT \`FK_c31435184b77187af3e45d35d46\` FOREIGN KEY (\`idCategory\`) REFERENCES \`categories\`(\`idCategory\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Products\` ADD CONSTRAINT \`FK_ee8bfb0d819ec44bdac86bc7aa1\` FOREIGN KEY (\`addedBy\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Products\` ADD CONSTRAINT \`FK_e763e61479d5a20471c7f2954fa\` FOREIGN KEY (\`supplierId\`) REFERENCES \`supplier\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Products\` DROP FOREIGN KEY \`FK_e763e61479d5a20471c7f2954fa\``);
        await queryRunner.query(`ALTER TABLE \`Products\` DROP FOREIGN KEY \`FK_ee8bfb0d819ec44bdac86bc7aa1\``);
        await queryRunner.query(`ALTER TABLE \`Products\` DROP FOREIGN KEY \`FK_c31435184b77187af3e45d35d46\``);
        await queryRunner.query(`ALTER TABLE \`SellDetail\` DROP FOREIGN KEY \`FK_80a3525a23dd7f5d3052f02d2a3\``);
        await queryRunner.query(`ALTER TABLE \`SellDetail\` DROP FOREIGN KEY \`FK_d0abdd4eff181f8566f10ca8033\``);
        await queryRunner.query(`ALTER TABLE \`sells\` DROP FOREIGN KEY \`FK_1aa07dca0e510a95b9723d5b4d9\``);
        await queryRunner.query(`ALTER TABLE \`sells\` DROP FOREIGN KEY \`FK_49446dbb5033126e1fd64d32866\``);
        await queryRunner.query(`ALTER TABLE \`order\` DROP FOREIGN KEY \`FK_caabe91507b3379c7ba73637b84\``);
        await queryRunner.query(`ALTER TABLE \`detail_order\` DROP FOREIGN KEY \`FK_4c3eb3ee75d81ef599c73aa396b\``);
        await queryRunner.query(`ALTER TABLE \`detail_order\` DROP FOREIGN KEY \`FK_28c643f280d3f04dd8d53c4b906\``);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`phone\` \`phone\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`createdAt\` \`createdAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP()`);
        await queryRunner.query(`ALTER TABLE \`roles\` CHANGE \`description\` \`description\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`permissions\` CHANGE \`description\` \`description\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`Products\` CHANGE \`supplierId\` \`supplierId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`Products\` CHANGE \`addedBy\` \`addedBy\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`Products\` CHANGE \`idCategory\` \`idCategory\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`Products\` CHANGE \`description\` \`description\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Products\` ADD CONSTRAINT \`FK_e763e61479d5a20471c7f2954fa\` FOREIGN KEY (\`supplierId\`) REFERENCES \`supplier\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Products\` ADD CONSTRAINT \`FK_ee8bfb0d819ec44bdac86bc7aa1\` FOREIGN KEY (\`addedBy\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Products\` ADD CONSTRAINT \`FK_c31435184b77187af3e45d35d46\` FOREIGN KEY (\`idCategory\`) REFERENCES \`categories\`(\`idCategory\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`categories\` CHANGE \`description\` \`description\` text NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`SellDetail\` CHANGE \`idVenta\` \`idVenta\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`SellDetail\` CHANGE \`idProducto\` \`idProducto\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`SellDetail\` ADD CONSTRAINT \`FK_80a3525a23dd7f5d3052f02d2a3\` FOREIGN KEY (\`idVenta\`) REFERENCES \`sells\`(\`idSell\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`SellDetail\` ADD CONSTRAINT \`FK_d0abdd4eff181f8566f10ca8033\` FOREIGN KEY (\`idProducto\`) REFERENCES \`Products\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`sells\` CHANGE \`idCliente\` \`idCliente\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`sells\` CHANGE \`idUsuario\` \`idUsuario\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`sells\` CHANGE \`sellDate\` \`sellDate\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP()`);
        await queryRunner.query(`ALTER TABLE \`sells\` ADD CONSTRAINT \`FK_1aa07dca0e510a95b9723d5b4d9\` FOREIGN KEY (\`idCliente\`) REFERENCES \`clients\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`sells\` ADD CONSTRAINT \`FK_49446dbb5033126e1fd64d32866\` FOREIGN KEY (\`idUsuario\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`order\` CHANGE \`userId\` \`userId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`order\` CHANGE \`createdAt\` \`createdAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP()`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD CONSTRAINT \`FK_caabe91507b3379c7ba73637b84\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`detail_order\` CHANGE \`productId\` \`productId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`detail_order\` CHANGE \`orderId\` \`orderId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`detail_order\` ADD CONSTRAINT \`FK_4c3eb3ee75d81ef599c73aa396b\` FOREIGN KEY (\`productId\`) REFERENCES \`Products\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`detail_order\` ADD CONSTRAINT \`FK_28c643f280d3f04dd8d53c4b906\` FOREIGN KEY (\`orderId\`) REFERENCES \`order\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`supplier\` CHANGE \`notes\` \`notes\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`supplier\` CHANGE \`city\` \`city\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`supplier\` CHANGE \`address\` \`address\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`supplier\` CHANGE \`contactPhone\` \`contactPhone\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`clients\` CHANGE \`phone\` \`phone\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`clients\` CHANGE \`createdAt\` \`createdAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP()`);
        await queryRunner.query(`ALTER TABLE \`clients\` CHANGE \`description\` \`description\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_26c9336d231c4e90419a5954bd\` ON \`Products\` (\`name\`)`);
    }

}
