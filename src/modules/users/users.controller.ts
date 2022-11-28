import {Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import {UsersImplService} from './users-impl.service';
import {CreateUserDto} from './dto/create-user.dto';
import {UpdateUserDto} from './dto/update-user.dto';
import {ResponseEntity} from "../../common/resources/base/response.entity";
import { Permission } from '../auth/decorators/permisson.decorator';

@Controller('api/users')
export class UsersController {
    constructor(private readonly usersService: UsersImplService) {
    }

    @Post()
    async create(@Body() body: CreateUserDto): Promise<boolean> {
        await this.usersService.create(body);
        return true
    }

    @Get()
    @Permission()
    findAll() {
        return this.usersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.usersService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.usersService.update(+id, updateUserDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.usersService.remove(+id);
    }
}
