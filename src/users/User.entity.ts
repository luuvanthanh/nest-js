import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { IsEmail } from 'class-validator';
import { Role } from "src/role.enum";
import { Product } from '../products/Product.entity';
import { Order } from '../order/Order.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({
        type: 'enum',
        enum: Role,
        default: Role.USER
    })
    role: Role

    @OneToMany(() => Product, product => product.user)
    products: Product[];

    @OneToMany(() => Order, order => order.user) 
    orders: Order[];
}