import {IsEmail, IsNotEmpty, MinLength} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAuthDto {
    @IsNotEmpty({ message: 'không được trống' })
    @ApiProperty()
    @IsEmail({}, { message: 'Định dạng không đúng kiểu email' })
    email: string;

    @IsNotEmpty()
    @ApiProperty()
    @MinLength(6, {message: "Độ dài mật khẩu phải lớn hơn hoặc bằng 6"})
    password: string;
}