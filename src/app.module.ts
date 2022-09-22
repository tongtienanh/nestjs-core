import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import * as _ from "lodash"
import { typeormAsyncConfig } from 'src/config/typeorm.config';
@Module({
  imports: [
    TypeOrmModule.forRootAsync(typeormAsyncConfig),
    UsersModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
