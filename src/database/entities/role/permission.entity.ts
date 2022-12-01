import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { CoreBaseEntity } from '../core/base.entity';
import { ModulePermission } from './module.entity';
import { RolePermission } from './role-permissions.entity';

@Entity('permissions')
export class Permission extends CoreBaseEntity {
  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ name: 'module_id' })
  moduleId: number;

  @ManyToOne(() => ModulePermission, (module) => module.permissions)
  @JoinColumn({ name: 'module_id' })
  module: ModulePermission;

  @OneToMany(
    () => RolePermission,
    (rolePermission) => rolePermission.permission,
  )
  rolePermissions: [];
}
