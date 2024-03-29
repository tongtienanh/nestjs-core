import {BaseEntity, DeleteResult, FindManyOptions, Repository, UpdateResult} from "typeorm";
import {BaseInterface} from "./base.interface";
import {EntityId} from "typeorm/repository/EntityId";
import {PaginationInterface, ResponseEntity} from "../resources/base/response.entity";
import {BaseFiler} from "../filter/base.filer";

export abstract class BaseService<T extends BaseEntity, R extends Repository<T>> implements BaseInterface<T>{
    protected readonly repository: R;

    constructor(repository: R) {
        this.repository = repository;
    }

    async findById(id: EntityId): Promise<T> {
        return await this.repository.findOne(id)
    }
    findByIds(id: [EntityId]): Promise<T[]> {
        return this.repository.findByIds(id)
    }
    store(data: any): Promise<T> {
        return this.repository.save(data)
    }
    update(id: EntityId, data: any): Promise<UpdateResult> {
        return this.repository.update(id, data)
    }
    delete(id: EntityId): Promise<DeleteResult> {
        return this.repository.delete(id)
    }
    async findAndPagination(filter?: FindManyOptions<T>, pageAble?: BaseFiler) {
        const { page, size } = pageAble;
        const skip = (page - 1) * size;
        filter = {
            ...filter,
            skip,
            take: size
        }
        const responses = await this.repository.findAndCount(filter);
        const record = responses[0];
        const totalRecord = responses[1];
        const paginationResponse: PaginationInterface = {
            totalPages: Math.ceil(totalRecord / size),
            totalElements: totalRecord,
            numberOfElements: record.length,
            page,
            size
        }
        return new ResponseEntity(record, null, paginationResponse)
    }
}
