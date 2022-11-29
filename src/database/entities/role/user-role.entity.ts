import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { CoreBaseEntity } from "../core/base.entity";
import { User } from 'src/database/entities/user/user.entity';
import { Role } from './role.entity';

@Entity("user_role")
export class UserRole extends CoreBaseEntity {
    @Column()
    userId: number;

    @Column()
    roleId: number;

    @ManyToOne(() => User, (user) => user.userRole)
    @JoinColumn({ name: 'userId', referencedColumnName: "id" })
    user: User

    @ManyToOne(() => Role, (role) => role.userRole)
    @JoinColumn({ name: 'roleId', referencedColumnName: "id" })
    role: Role
}