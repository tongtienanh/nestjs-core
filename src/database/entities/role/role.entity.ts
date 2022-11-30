import { Column, Entity, OneToMany } from 'typeorm';
import { CoreBaseEntity } from '../core/base.entity';
import { RolePermission } from './role-permissions.entity';
import { UserRole } from './user-role.entity';

@Entity('roles')
export class Role extends CoreBaseEntity {
  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => RolePermission, (rolePermission) => rolePermission.role)
  rolePermission: RolePermission[];

  @OneToMany(() => UserRole, (userRole) => userRole.role)
  userRole: UserRole[];
}
