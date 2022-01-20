import { Controller, Post, UseInterceptors, Body } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiConsumes } from '@nestjs/swagger';
import { RegisterService } from './register.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { User } from '../users/User.entity';

@Controller('register')
export class RegisterController {
    constructor (private readonly reService: RegisterService){}

    @Post()
    @UseInterceptors(FileInterceptor(''))
    @ApiConsumes('multipart/form-data') 
    createProduct(@Body() createDto: CreateUserDto): Promise<User> {
        return this.reService.registerUser(createDto);
    }
}
