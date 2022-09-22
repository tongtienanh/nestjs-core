import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
export const typeormAsyncConfig: TypeOrmModuleAsyncOptions = {
  useFactory: async (): Promise<any> => {
    return {
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
      }
    };
  },
};
