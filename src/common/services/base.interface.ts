import {EntityId} from "typeorm/repository/EntityId";
import {DeleteResult, FindManyOptions, UpdateResult} from "typeorm";
import {ResponseEntity} from "../resources/base/response.entity";
import {BaseFiler} from "../filter/base.filer";

export interface BaseInterface<T> {
    findAndPagination(filter?: FindManyOptions<T>, pageAble?: BaseFiler)

}
