import {Column, Entity} from "typeorm";
import {CoreBaseEntity} from "../core/base.entity";

@Entity("tag")
export class Tag extends CoreBaseEntity {
    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    slug: string;
}
