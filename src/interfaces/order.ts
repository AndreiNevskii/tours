 export interface IOrder {
    //  age: string,
    //  birthDay: string,
    //  cardNumber: string,
     tourId: string,
     userId?: string,
     _id?: string,
    orderPerson: IOrderPerson,
  }

  export interface IOrderPerson {
    firstName: string;
    lastName: string;
    cardNumber: string;
    birthDay: string;
    age: number;
    citizenship: string;
  }

