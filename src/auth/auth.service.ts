import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/User.entity';
import { CreateAuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
        private jwtService: JwtService
    ){}
    async signinLocal(authDto: CreateAuthDto) {
        const user = await this.userRepository.findOne({email: authDto.email, password: authDto.password});
        return this.signUser(user.id, user.email, user.role);
    }

    signupLocal() {

    }

    signUser(userId: number, email: string, role: string){
        return this.jwtService.sign({
            sub: userId,
            email: email,
            role: role,
        });
    }
}
