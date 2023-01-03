import {CoreBaseEntity} from "../core/base.entity";
import {Column, Entity} from "typeorm";

@Entity("game")
export class Game extends CoreBaseEntity {
    @Column()
    name: string;

    @Column()
    image: string;

    @Column()
    description: string;

    @Column()
    content: string;

    @Column()
    slug: string;
}
