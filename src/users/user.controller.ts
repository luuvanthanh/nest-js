import { Controller, Get, Post, UseInterceptors, Body, Put, Param, Delete } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiConsumes } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './User.entity';

@Controller('user')
export class UserController {
    constructor (private readonly userService: UserService){}

    @Get()
    getAll() {
        return this.userService.getAll();
    }
    @Get(':id/product')
    getProductByIdUser(@Param('id') id: number) {
        return this.userService.getOneById(id);
    }

    @Post()
    @UseInterceptors(FileInterceptor(''))
    @ApiConsumes('multipart/form-data') 
    createProduct(@Body() createDto: CreateUserDto): Promise<User> {
        return this.userService.createUser(createDto);
    }

    @Put(':id')
    @UseInterceptors(FileInterceptor(''))
    @ApiConsumes('multipart/form-data')
    updateProduct(@Param('id') id: number, @Body() updateDto: CreateUserDto): Promise<User> {
        return this.userService.updateUser(id, updateDto);
    }

    @Delete(':id')
    deleteProduct(@Param('id') id: number): Promise<User> {
        return this.userService.deleteUser(id);
    }
}
