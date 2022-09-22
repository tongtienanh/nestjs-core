import {BaseEntity, PrimaryColumn, DeleteDateColumn, UpdateDateColumn, CreateDateColumn} from 'typeorm'
export abstract class CoreBaseEntity extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @CreateDateColumn({name: "created_at"})
    createdAt: Date;

    @UpdateDateColumn({name: "updated_at"})
    updatedAt: Date;

    @DeleteDateColumn({name: "deleted_at"})
    deletedAt: Date;
}