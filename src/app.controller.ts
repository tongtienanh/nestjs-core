import { Controller, Get, Request } from '@nestjs/common';
import { AppService } from './app.service';
import {Permission} from "./modules/auth/decorators/permisson.decorator";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Permission()
  getHello(@Request() req): string {
    console.log(req.user)
    return this.appService.getHello();
  }
}
