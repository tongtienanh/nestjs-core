import {BaseEntity, PrimaryGeneratedColumn, DeleteDateColumn, UpdateDateColumn, CreateDateColumn} from 'typeorm'
export abstract class CoreBaseEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}
