import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {LocalFileDto} from "../dto/local-file.dto";
import {LocalFile} from "../../../database/entities";
import {CoreLoggerService} from "../../common/services/logger/base-logger.service";

@Injectable()
class LocalFilesService {
    constructor(
        @InjectRepository(LocalFile)
        private localFilesRepository: Repository<LocalFile>,
    ) {}
    private readonly logger = new CoreLoggerService(LocalFilesService.name)
    async saveLocalFileData(fileData: LocalFileDto) {
        this.logger.color(fileData)
        const newFile = await this.localFilesRepository.create(fileData)
        this.logger.color(newFile)
        await this.localFilesRepository.save(newFile);

        return newFile;
    }
}

export default LocalFilesService;
