import {Entity, Column, BeforeInsert, BeforeUpdate} from 'typeorm'
import { CoreBaseEntity } from './core/base.entity';
import * as bcrypt from 'bcrypt'

@Entity('users')
export class User extends CoreBaseEntity{
    @Column()
    username: string;

    @Column({select: false})
    password: string;

    @Column({nullable: true})
    age: number;

    @Column({nullable: true})
    gender: number;

    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword() {
       if (this.password) {
        this.password = await bcrypt.hash(this.password, process.env.SALT_ROUNDS)
       } 
    }
}