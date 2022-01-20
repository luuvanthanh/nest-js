import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/User.entity';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy/jwt.strategy';
import { AuthGuard } from '../auth.guard';
import { RolesGuard } from '../role.guard';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule,
    JwtModule.register({
      secret: 'super-secret-cat',
      signOptions: { expiresIn: '60s' },
    }),
],  
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy]
})
export class AuthModule {}
