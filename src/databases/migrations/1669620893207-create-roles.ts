import {MigrationInterface, QueryRunner, Table, TableColumn} from "typeorm";
import { DatabaseUtils } from 'src/common/utils/database.utils';

export class createRoles1669620893207 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "roles",
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
                    name: 'name',
                    type: 'varchar',
                    isNullable: false
                }),
                new TableColumn({
                    name: 'description',
                    type: 'varchar',
                    isNullable: false

                }),
                ...DatabaseUtils.getDefaultColumns()
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('roles')
    }

}
