import { Injectable } from '@nestjs/common';
import {getConnection, Repository} from "typeorm";
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/User.entity';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Injectable()
export class RegisterService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ){}

    registerUser(createDto: CreateUserDto): Promise<User> {
        const newUser = this.userRepository.create(createDto);

        return this.userRepository.save(newUser);
    }
}