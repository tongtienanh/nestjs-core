import {Column, Entity} from "typeorm";
import {CoreBaseEntity} from "../core/base.entity";

@Entity("download")
export class Download extends CoreBaseEntity {
    @Column({name: "game_id"})
    gameId: number;

    @Column({name: "tag_id"})
    tagId: number;
}
