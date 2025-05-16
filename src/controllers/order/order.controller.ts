import { Body, Controller, Post } from '@nestjs/common';
import { OrderDto } from 'src/dto/order-dto';
import { OrdersService } from 'src/services/orders/orders/orders.service';

@Controller('order')
export class OrderController {

    constructor(private ordersService: OrdersService) {}

    @Post() 
    initOrders(@Body() data: OrderDto): void {
        const orderData = new OrderDto(data.age, data.birthDay, data.cardNumber, data.tourId, data.userId);
        this.ordersService.sendOrder(orderData);
    }    
    
}
