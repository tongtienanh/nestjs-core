import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {UserRepository} from "../../database/repository/user/user.repository";
import {User} from "../../database/entities/user/user.entity";
import {Repository} from "typeorm";

@Injectable()
export class UsersImplService {
  // private readonly userRepository: UserRepository
  constructor(
      @InjectRepository(User)
      private userRepository: Repository<User>
      // @InjectRepository(User) repository: UserRepository
  ) {
  }
  async create(body: CreateUserDto): Promise<boolean> {
    const user = new User()
    user.username = "TOng1"
    user.password = '12334'
    user.age = 11
    await this.userRepository.insert(user)
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
}
