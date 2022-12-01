import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../../../database/entities/user/user.entity";
import {Repository} from "typeorm";
import { UserRole } from '../../../database/entities/role/user-role.entity';
import { CoreLoggerService } from '../../common/services/logger/base-logger.service';

@Injectable()
export class UsersImplService {
  constructor(
      @InjectRepository(User)
      private userRepository: Repository<User>,
      @InjectRepository(UserRole)
      private userRoleRepository: Repository<UserRole>,
  ) {
  }
  private readonly logger = new CoreLoggerService("UsersImplService.name", true);
  async create(body: CreateUserDto): Promise<boolean> {
    const user = body.toEntity();
    await this.userRepository.insert(user);

    await this.setUserRoles(body.roleIds, user.id)

    return true;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async setUserRoles(roleIds, userId): Promise<void> {
    const userRoles = [];
    for (const roleId of roleIds) {
      const userRole = new UserRole();
      userRole.userId = userId;
      userRole.roleId = roleId;
      userRole.createdAt = new Date();
      userRole.updatedAt = new Date();
      userRoles.push(userRole);
    }

    await this.userRoleRepository.insert(userRoles);
  }
}
