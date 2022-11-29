import {MigrationInterface, QueryRunner, Table, TableColumn} from "typeorm";
import { DatabaseUtils } from './../../common/utils/database.utils';

export class createRolesPermission1669626626510 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "roles_permissions",
            columns: [
                new TableColumn({
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    generationStrategy: 'increment',
                    isGenerated: true,
                    isNullable: false
                }),
                new TableColumn({
                    name: 'roleId',
                    type: 'int',
                    isNullable: false
                }),
                new TableColumn({
                    name: 'model',
                    type: 'varchar',
                    isNullable: false
                }),
                new TableColumn({
                    name: 'action',
                    type: 'varchar',
                    isNullable: false

                }),
                ...DatabaseUtils.getDefaultColumns()
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('roles_permissions')
    }

}
