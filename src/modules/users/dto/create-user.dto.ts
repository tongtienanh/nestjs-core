import { Transform } from "class-transformer";
import {IsNotEmpty} from "class-validator";
import {User} from "../../../database/entities/user/user.entity";
import { TransformUtils } from './../../core/utils/transform.utils';

export class CreateUserDto {
    @IsNotEmpty()
    @Transform(TransformUtils.parseString)
    username: string;

    @IsNotEmpty()
    @Transform(TransformUtils.parseString)
    password: string;

    confirmPassword?: string;

    age?: number;

    gender?: number;

    @Transform(TransformUtils.parseNumberArray)
    roleIds: number[];


    toEntity(): User {
        const entity = new User()
        entity.username = this.username;
        entity.password = this.password;
        entity.age = this.age;
        entity.gender = this.gender;
        entity.createdAt = new Date();
        entity.updatedAt = new Date();

        return entity;
    }
}
