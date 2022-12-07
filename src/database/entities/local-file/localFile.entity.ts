import {Column, Entity, JoinColumn, OneToOne} from "typeorm";
import {CoreBaseEntity} from "../core/base.entity";
import {User} from "../user/user.entity";

@Entity("avatar")
export class LocalFile extends CoreBaseEntity {
    @Column({name: "file_name"})
    fileName: string;

    @Column()
    path: string;

    @Column()
    mimetype: string;

    @JoinColumn({ name: 'id', referencedColumnName: "avatarId"})

    @OneToOne(
        () => User,
        {
            nullable: true
        }
    )
    public user?: User;
}
