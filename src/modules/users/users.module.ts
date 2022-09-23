import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import {UsersImplService} from "./users-impl.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserRepository} from "../../database/repository/user/user.repository";
import {User} from "../../database/entities/user/user.entity";

@Module({
  imports: [
      TypeOrmModule.forFeature([
          User
      ])
  ],
  controllers: [UsersController],
  providers: [UsersImplService]
})
export class UsersModule {}
