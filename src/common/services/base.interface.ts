import {EntityId} from "typeorm/repository/EntityId";
import {DeleteResult, FindManyOptions, UpdateResult} from "typeorm";
import {ResponseEntity} from "../resources/base/response.entity";
import {BaseFiler} from "../filter/base.filer";

export interface BaseInterface<T> {
    findById(id: EntityId): Promise<T>

    findByIds(id: [EntityId]): Promise<T[]>

    store(data: any): Promise<T>

    update(id:EntityId, data: any): Promise<UpdateResult>

    delete(id: EntityId): Promise<DeleteResult>

    findAndPagination(filter?: FindManyOptions<T>, pageAble?: BaseFiler)

}
