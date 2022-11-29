import {MigrationInterface, QueryRunner, Table, TableColumn} from "typeorm";
import { DatabaseUtils } from './../../common/utils/database.utils';

export class createUserRole1669626748395 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "user_role",
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
                    name: 'userId',
                    type: 'int',
                    isNullable: false
                }),
                new TableColumn({
                    name: 'roleId',
                    type: 'int',
                    isNullable: false
                }),
                ...DatabaseUtils.getDefaultColumns()
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user_role')
    }

}
