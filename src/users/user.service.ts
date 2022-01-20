import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './User.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ){}

    async getAll(): Promise<User[]> {
        return this.userRepository.find({ relations: ["products"] });
    }

    async getOneById(id: number): Promise<User> {
        try {
            const user = await this.userRepository.findOneOrFail(id, { relations: ["products"] });
            return user;
        } catch (error) {
            throw error;
        }
    }

    createUser(createDto: CreateUserDto): Promise<User> {
        const newUser = this.userRepository.create(createDto);

        return this.userRepository.save(newUser);
    }

    async updateUser(id: number, updateDto: CreateUserDto): Promise<User> {
        const user = await this.getOneById(id);
        user.email = updateDto.email;
        user.password = updateDto.password;

        return this.userRepository.save(user);
    }

    async deleteUser(id: number): Promise<User> {
        const user = await this.getOneById(id);

        return this.userRepository.remove(user);
    }
}