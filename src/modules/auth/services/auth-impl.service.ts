import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { LoginRequest } from './../requests/login.request';
import { User } from 'src/database/entities/user/user.entity';
import { Repository } from 'typeorm';
import { UnauthorizedException } from '@nestjs/common/exceptions';
import { HashUtils } from './../utils/bcrypt.utils';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthImplService implements AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async login(request: LoginRequest): Promise<object> {
    const user = await this.userRepository.findOne({
      where: {
        username: request.username,
      },
    });
    if (!user) throw new UnauthorizedException('Tài khoản hoặc mật khẩu chưa đúng.');
    const validPassword = await HashUtils.compare(
      request.password,
      user.password,
    );

    if (!validPassword) throw new UnauthorizedException('Mật khẩu chưa đúng!');
    const userId = user.id;

    return {
      access_token: this.jwtService.sign({ userId }),
    };
  }
}
