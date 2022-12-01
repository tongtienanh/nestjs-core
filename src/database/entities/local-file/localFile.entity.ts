import {Column, Entity} from "typeorm";
import {CoreBaseEntity} from "../core/base.entity";

@Entity("avatar")
export class LocalFile extends CoreBaseEntity {
    @Column({name: "file_name"})
    fileName: string;

    @Column()
    path: string;

    @Column()
    mimetype: string;
}
