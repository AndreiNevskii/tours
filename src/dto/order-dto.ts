import { Type } from "class-transformer";
import { IsDateString, IsInt, IsNotEmpty, IsString, Matches, Max, MaxLength, Min, MinLength, ValidateNested } from "class-validator";
import { IOrder, IOrderPerson } from "src/interfaces/order";


export class OrderPersonDto implements IOrderPerson {
  @IsNotEmpty() firstName: string;
  
  @IsNotEmpty() 
  @IsString()
  @MinLength(3)
  @MaxLength(30)
  lastName: string;
  
  @IsNotEmpty()
  @Matches(/^\d{12,14}$/)
  cardNumber: string;
 
  @IsNotEmpty()
  @IsDateString()
  birthDay: string; 
  
  @IsInt()
  @Min(18)
  @Max(100)
  @IsNotEmpty()
  age: number;

  @IsNotEmpty() citizenship: string;
 }

export class OrderDto implements IOrder {
@IsNotEmpty() tourId: string;
@IsNotEmpty() userId: string;
@ValidateNested()
@Type(() => OrderPersonDto)
orderPerson: OrderPersonDto;



// export class OrderDto implements IOrder {

//    @IsInt()
//    @Min(18)
//    @Max(100)
//    @IsNotEmpty()
//    age: string;
//    @IsNotEmpty()
//    @IsDateString()
//    birthDay: string;
//    @IsNotEmpty() cardNumber: string;
//    @IsNotEmpty()tourId: string;
    // userId?: string;
    // _id?: string;

    // constructor(name, age, birthDay, cardNumber, tourId ) {
    // this.name = name;
    // this.age = age;
    // this.birthDay = birthDay;
    // this.cardNumber = cardNumber;
    // this.tourId = tourId;

    // this.userId = userId;
    // this._id = _id;
    }
