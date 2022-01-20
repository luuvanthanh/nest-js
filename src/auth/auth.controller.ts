import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiConsumes } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    @UseInterceptors(FileInterceptor(''))
    @ApiConsumes('multipart/form-data')
    signinLocal(@Body() dtoUser: CreateAuthDto ) {
        return this.authService.signinLocal(dtoUser);
    }

    @Post()
    signupLocal() {
        return this.authService.signupLocal();
    }
}