import {IsEmail, IsNotEmpty, IsNumberString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
    @IsNotEmpty()
    @ApiProperty()
    // @IsEmail()
    name: string;

    @IsNotEmpty()
    @ApiProperty()
    @IsNumberString({ name: 'là số'})
    quantity: number;

    @IsNotEmpty()
    @ApiProperty()  
    @MinLength(5, {message: "Mô tả phải lớn hơn 5 ký tự"})
    description: string;
}