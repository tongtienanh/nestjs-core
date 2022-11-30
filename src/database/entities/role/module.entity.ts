import { Column, Entity, OneToMany } from 'typeorm';
import { CoreBaseEntity } from '../core/base.entity';
import { Permission } from './permission.entity';

@Entity('modules')
export class ModulePermission extends CoreBaseEntity {
  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => Permission, (permission) => permission.module)
  permissions: Permission[];
}
