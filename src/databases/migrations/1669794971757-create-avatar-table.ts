import {MigrationInterface, QueryRunner, Table, TableColumn} from "typeorm"
import {DatabaseUtils} from "../../common/utils/database.utils";

export class createAvatarTable1669794971757 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "avatar",
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
                    name: 'file_name',
                    type: 'varchar',
                    isNullable: false
                }),
                new TableColumn({
                    name: 'path',
                    type: 'varchar',
                    isNullable: false
                }),
                new TableColumn({
                    name: 'mimetype',
                    type: 'varchar',
                    isNullable: false
                }),
                ...DatabaseUtils.getDefaultColumns()
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('avatar')
    }

}
