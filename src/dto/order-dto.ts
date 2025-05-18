import { IOrder } from "src/interfaces/order";

export class OrderDto implements IOrder {
    name: string;
    age: string;
    birthDay: string;
    cardNumber: string;
    tourId: string;
    userId?: string;
    _id?: string;

    constructor(name, age, birthDay, cardNumber, tourId ) {
    this.name = name;
    this.age = age;
    this.birthDay = birthDay;
    this.cardNumber = cardNumber;
    this.tourId = tourId;
    // this.userId = userId;
    // this._id = _id;
    }
}