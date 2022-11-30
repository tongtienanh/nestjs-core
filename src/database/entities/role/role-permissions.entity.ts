import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { CoreBaseEntity } from "../core/base.entity";
import { Role } from './role.entity';
import { Permission } from './permission.entity';

@Entity("roles_permissions")
export class RolePermission extends CoreBaseEntity {
    @Column()
    roleId: number;

    @Column()
    model: string;

    @Column()
    action: string;

    @ManyToOne(() => Role, (role) => role.rolePermission)
    role: Role

    @ManyToOne(() => Permission, (permission) => permission.rolePermissions)
    permission: Permission
}