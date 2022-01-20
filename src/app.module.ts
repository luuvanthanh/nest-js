import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../ormconfig';
import { ProductModule } from './products/product.module';
import { UserModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), 
    ProductModule, 
    UserModule, 
    // LoginModule, 
    // RegisterModule, 
    AuthModule,
    OrderModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
  