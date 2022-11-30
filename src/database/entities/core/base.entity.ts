import {
  BaseEntity,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  CreateDateColumn,
  Column,
} from 'typeorm';
export abstract class CoreBaseEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @Column({ name: 'createdBy' })
  createdBy?: number;

  @Column()
  updatedBy?: number;
}
