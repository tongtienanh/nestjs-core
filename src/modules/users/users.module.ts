import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import {UsersImplService} from "./users-impl.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../../database/entities/user/user.entity";
import { UserRole } from './../../database/entities/role/user-role.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
          User,
          UserRole,
      ])
  ],
  controllers: [UsersController],
  providers: [UsersImplService]
})
export class UsersModule {}
