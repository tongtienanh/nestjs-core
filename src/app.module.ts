import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 6034,
      username: 'root',
      password: '123456',
      database: 'my-app',
      entities: [],
      synchronize: true,
      logging: true,
      migrations: ["src/databases/migrations/**/*{.ts,.js}"],
    }),
    UsersModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
