import { Order } from "src/order/Order.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from '../users/User.entity';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    quantity: number;

    @Column()
    description: string;

    @ManyToOne(() => User, user => user.products)
    user: User;

    @ManyToMany(() => Order, order => order.product)
    @JoinTable()
    oders: Order[];
}