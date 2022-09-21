import { Module } from '@nestjs/common';
import { ExampleService } from './example.service';
import { ExampleController } from './example/example.controller';
import { ExampleController } from './example.controller';

@Module({
  providers: [ExampleService],
  controllers: [ExampleController]
})
export class ExampleModule {}
