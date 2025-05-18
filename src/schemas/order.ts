import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { IOrder } from "src/interfaces/order";


export type OrderDocument = HydratedDocument<Order>;
 
@Schema()
export class Order implements IOrder {
     @Prop() name: string
   
    @Prop() age: string;
 
    @Prop() birthDay: string;
 
    @Prop() cardNumber: string
 
    @Prop() tourId: string

   //  @Prop() userId: string

   //  @Prop() _id: string     
 }   
 export const OrderSchema = SchemaFactory.createForClass(Order);