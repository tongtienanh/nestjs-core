import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeormAsyncConfig } from 'src/config/typeorm.config';
import { ConfigModule } from '@nestjs/config';
import {APP_FILTER} from "@nestjs/core";
import {AllExceptionFilter} from "./common/filter/exceptions.filter";
import {UsersModule} from "./modules/users/users.module";
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(typeormAsyncConfig),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_FILTER,
    useClass: AllExceptionFilter
  },],
})
export class AppModule {}
