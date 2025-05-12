import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from '../../services/users/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../../schemas/user';
import { AuthService } from 'src/services/auth/auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/static/private/constants';

@Module({
      imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema}]),
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            })
      ],
      controllers: [UsersController],
      providers: [UsersService, AuthService],
})
export class UsersModule {    
}
