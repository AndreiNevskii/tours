import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from 'src/schemas/order';
import { OrdersService } from 'src/services/orders/orders/orders.service';

@Module({
      imports: [MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema}]),
              ],
      controllers: [OrdersController],
      providers: [OrdersService],
})
export class OrdersModule {}
