import { Controller, Get, Post, Put, Delete, Body, Param, UseInterceptors, UseGuards, SetMetadata, } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import {getConnection} from "typeorm";
import { Product } from './Product.entity';
import { ProductService } from './product.service';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiBearerAuth, ApiConsumes } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from '../roles.decorator';
import { Role } from 'src/role.enum';
import { RolesGuard } from '../role.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';


@Controller('products')
export class ProductsController {

    constructor (private readonly prService: ProductService){}

    @Get()
    @Roles(Role.ADMIN)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @ApiBearerAuth()
    getAll() {

        return this.prService.getAll();
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @UseInterceptors(FileInterceptor(''))
    @ApiConsumes('multipart/form-data') 
    createProduct(@Body() createDto: CreateProductDto): Promise<Product> {

        return this.prService.createProduct(createDto);
    }

    @Put(':id')
    @UseInterceptors(FileInterceptor(''))
    @ApiConsumes('multipart/form-data')
    updateProduct(@Param('id') id: number, @Body() updateDto: UpdateProductDto): Promise<Product> {

        return this.prService.updateProduct(id, updateDto);
    }

    @Delete(':id')
    deleteProduct(@Param('id') id: number): Promise<Product> {

        return this.prService.deleteProduct(id);
    }
}
