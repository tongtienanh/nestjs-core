import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from '@nestjs/typeorm';
import {User} from "../database/entities/user/user.entity";
import 'dotenv/config';
export const typeormAsyncConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (): Promise<any> => {
    return {
      type: 'mysql',
      host: 'localhost',
      port: process.env.DB_PORT,
      username: process.env.DB_USER_NAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [
          User
      ],
      synchronize: false,
      logging: true,
      migrations: ['dist/databases/migrations/**/*{.ts,.js}'],
      cli: {
        migrationsDir: "src/databases/migrations"
      },
      extra: {
        charset: 'utf8mb4_unicode_ci',
      },
    };
  },
};

export const typeOrmConfig = {
  type: 'mysql',
      host: 'localhost',
      port: process.env.DB_PORT,
      username: process.env.DB_USER_NAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: false,
      logging: true,
      migrations: ['dist/databases/migrations/**/*{.ts,.js}'],
      cli: {
        migrationsDir: "src/databases/migrations"
      },
      extra: {
        charset: 'utf8mb4_unicode_ci',
      },
};
