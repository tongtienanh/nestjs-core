import {Controller, FileTypeValidator, ParseFilePipe, Post, UploadedFile, UseInterceptors} from "@nestjs/common";
import {UsersImplService} from "../../services/users-impl.service";
import {FileInterceptor} from "@nestjs/platform-express";
import {diskStorage} from "multer";
import {CoreLoggerService} from "../../../common/services/logger/base-logger.service";
import LocalFilesService from "../../services/local-files.impl.service";
import {LocalFileDto} from "../../dto/local-file.dto";
import {ResponseEntity} from "../../../../common/resources/base/response.entity";
import {ConvertNameImage} from "../../../common/utils/convert-name-image";
import { extname } from 'path';

@Controller("api/user/upload")
export class UploadExampleController {
    constructor(
        private readonly userService: UsersImplService,
        private readonly localFileService: LocalFilesService
    ) {}
    private logger = new CoreLoggerService(UploadExampleController.name)

    @Post("file")
    @UseInterceptors(FileInterceptor("file"))
    async addFile(@UploadedFile() file) {
        this.logger.color(file)
        return {
            file: file.buffer.toString(),
        };
    }

    @Post("avatar")
    @UseInterceptors(FileInterceptor("avatar", {
        storage: diskStorage({
            destination: './uploads/avatar',
            filename(req, file: Express.Multer.File, callback: (error: (Error | null), filename: string) => void) {
                console.log({file})
                const fileName = ConvertNameImage.toSlug(file.originalname.split('.')[0]);
                const fileExtName = extname(file.originalname);
                const randomName = Array(4)
                    .fill(null)
                    .map(() => Math.round(Math.random() * 16).toString(16))
                    .join('');
                callback(null, `${fileName}-${randomName}${fileExtName}`)
            },
        })
    }))
    async addAvatar(@UploadedFile(new ParseFilePipe({
        validators: [
            new FileTypeValidator({fileType: 'jpeg'})
        ]
    })) file): Promise<ResponseEntity<boolean>> {
        const fileData: LocalFileDto = {
            path: file.path,
            fileName: file.originalname,
            mimetype: file.mimetype
        };
        await this.localFileService.saveLocalFileData(fileData)

        return new ResponseEntity<boolean>(true);
    }
}
