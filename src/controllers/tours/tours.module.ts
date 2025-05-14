import { Module } from '@nestjs/common';
import { ToursController } from './tours.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/static/private/constants';
import { ToursService } from 'src/services/tours/tours.service';
import { Tour, TourSchema } from 'src/schemas/tour';
import { JwtStrategyService } from 'src/services/Authentification/jwt.strategy/jwt.strategy.service';

@Module({
    controllers: [ToursController],
    imports: [MongooseModule.forFeature([{name: Tour.name, schema: TourSchema}]),
             PassportModule,
             JwtModule.register( {
                secret: jwtConstants.secret
             })],
     providers: [ToursService, JwtStrategyService]        
})

export class ToursModule {} ;

