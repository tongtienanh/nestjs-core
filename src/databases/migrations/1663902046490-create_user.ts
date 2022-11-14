import {MigrationInterface, QueryRunner, Table, TableColumn} from "typeorm";

export class createUser1663902046490 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "users",
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
                    name: 'username',
                    type: 'varchar',
                    isNullable: false
                }),
                new TableColumn({
                    name: 'password',
                    type: 'varchar',
                    isNullable: false

                }),
                new TableColumn({
                    name: 'age',
                    type: 'int',
                    isNullable: true
                }),
                new TableColumn({
                    name: 'gender',
                    type: 'int',
                    isNullable: true
                }),
                new TableColumn({
                    name: 'createdAt',
                    type: 'timestamp',
                    isNullable: true
                }),
                new TableColumn({
                    name: 'updatedAt',
                    type: 'timestamp',
                    isNullable: true
                }),
                new TableColumn({
                    name: 'deletedAt',
                    type: 'timestamp',
                    isNullable: true
                }),
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }

}
