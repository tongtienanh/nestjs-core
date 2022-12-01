import { TableColumn } from 'typeorm';

export class DatabaseUtils {
  static getDefaultColumns(): TableColumn[] {
    return [
      new TableColumn({
        name: 'createdAt',
        type: 'timestamp',
        isNullable: true,
      }),
      new TableColumn({
        name: 'updatedAt',
        type: 'timestamp',
        isNullable: true,
      }),
      new TableColumn({
        name: 'deletedAt',
        type: 'timestamp',
        isNullable: true,
      }),
      new TableColumn({
        name: 'createdBy',
        type: 'int',
        isNullable: true,
      }),
      new TableColumn({
        name: 'updatedBy',
        type: 'int',
        isNullable: true,
      }),
    ];
  }
}
