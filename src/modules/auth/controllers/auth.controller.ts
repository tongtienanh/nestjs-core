import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ResponseEntity } from 'src/common/resources/base/response.entity';
import { AuthService } from '../services/auth.service';
import { LoginRequest } from './../requests/login.request';
import {ApiOperation} from "@nestjs/swagger";

@Controller('api/auth')
export class AuthController {
  constructor(@Inject(AuthService) private authService: AuthService) {}

  @Post('/login')
  @ApiOperation({ summary: 'Login' })
  async login(@Body() request: LoginRequest): Promise<ResponseEntity<string>> {
    const data = await this.authService.login(request);

    return new ResponseEntity<string>(data);
  }
}
