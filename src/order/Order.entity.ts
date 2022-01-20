import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { User } from '../users/User.entity';
import { Product } from '../products/Product.entity';

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user => user.orders)
    user: User;

    @ManyToMany(() => Product, product => product.oders)
    product: Product[];
}