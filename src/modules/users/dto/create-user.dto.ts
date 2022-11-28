import {IsNotEmpty} from "class-validator";
import {User} from "../../../database/entities/user/user.entity";

export class CreateUserDto {
    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    password: string;

    confirmPassword?: string;

    age?: number;

    gender?: number;


    toEntity(): User {
        const entity = new User()

        return entity
    }
}
