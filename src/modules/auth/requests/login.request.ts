import { IsNotEmpty } from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class LoginRequest {
  @IsNotEmpty()
  @ApiProperty({example: "tonganh"})
  username: string;

  @IsNotEmpty()
  @ApiProperty({example: "123456"})
  password: string;
}
