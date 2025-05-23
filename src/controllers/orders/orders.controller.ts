import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { OrderDto } from 'src/dto/order-dto';
import { IOrder } from 'src/interfaces/order';
import { Order } from 'src/schemas/order';
import { OrdersService } from 'src/services/orders/orders/orders.service';

@Controller('orders')
export class OrdersController {

    constructor(private ordersService: OrdersService) {}

    // @Post() 
    // initOrder(@Body() data: OrderDto): void {
    //     const orderData = new OrderDto(data.age, data.birthDay, data.cardNumber, data.tourId);
    //     this.ordersService.sendOrder(orderData);
    // }   

    @Post() 
    initOrder(@Body() data: OrderDto): void {
           this.ordersService.sendOrder(data);
      
    }   


    @Get()
    getAllOrders(): Promise<Order[]> {
    return this.ordersService.getOrders();
    }


    
    @Delete()
       removeAllOrders(): void {
       this.ordersService.deleteOrders();
       } 

       
    
}
