import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from '../../services/users/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../../schemas/user';
import { AuthService } from 'src/services/Authentification/auth/auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/static/private/constants';
import { JwtStrategyService } from 'src/services/Authentification/jwt.strategy/jwt.strategy.service';

@Module({
      imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema}]),
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            })
      ],
      controllers: [UsersController],
      providers: [UsersService, AuthService, JwtStrategyService],
})
export class UsersModule {    
}
