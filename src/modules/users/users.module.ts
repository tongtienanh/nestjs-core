import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import {UsersImplService} from "./services/users-impl.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../../database/entities/user/user.entity";
import { UserRole } from './../../database/entities/role/user-role.entity';
import {UploadExampleController} from "./controllers/upload/upload-example.controller";
import LocalFilesImplService from "./services/local-files.impl.service";
import {LocalFile} from "../../database/entities";

@Module({
  imports: [
    TypeOrmModule.forFeature([
          User,
          UserRole,
          LocalFile
      ])
  ],
  controllers: [UsersController, UploadExampleController],
  providers: [UsersImplService, LocalFilesImplService]
})
export class UsersModule {}
