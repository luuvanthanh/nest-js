import { Injectable } from '@nestjs/common';
import {getConnection, Repository} from "typeorm";
import { Product } from './Product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateProductDto } from './dto/update-product.dto';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product) private readonly prRepository: Repository<Product>
    ){}

    async getAll(): Promise<Product[]> {
        return this.prRepository.find();
    }

    async getOneById(id: number): Promise<Product> {
        try {
            const product = await this.prRepository.findOneOrFail(id);
            return product;
        } catch (error) {
            throw error;
        }
    }

    createProduct(createDto: CreateProductDto): Promise<Product> {
        const newProduct = this.prRepository.create(createDto);

        return this.prRepository.save(newProduct);
    }

    async updateProduct(id: number, updateDto: UpdateProductDto): Promise<Product> {
        const product = await this.getOneById(id);
        product.name = updateDto.name;
        product.quantity = updateDto.quantity;
        product.description = updateDto.description;

        return this.prRepository.save(product);
    }

    async deleteProduct(id: number): Promise<Product> {
        const product = await this.getOneById(id);

        return this.prRepository.remove(product);
    }

}