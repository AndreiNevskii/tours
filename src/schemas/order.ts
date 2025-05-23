import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { IOrder, IOrderPerson } from "src/interfaces/order";


export type OrderDocument = HydratedDocument<Order>;
 
@Schema()
export class Order implements IOrder {
   
       @Prop() tourId: string
       @Prop() userId: string
       @Prop({type: Object}) orderPerson: IOrderPerson;

  
 }   
 export const OrderSchema = SchemaFactory.createForClass(Order);


  // @Prop() name: string
   
  //   @Prop() age: string;
 
  //   @Prop() birthDay: string;
 
  //   @Prop() cardNumber: string
 
  //   @Prop() tourId: string


   //  @Prop() userId: string


    