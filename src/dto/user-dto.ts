import { IsNotEmpty } from "class-validator";
import { IUser } from "src/interfaces/user";

export class UserDto implements IUser {
    @IsNotEmpty()
    password: string;
    // cardNumber: string;
    @IsNotEmpty()
    login: string;
//     email: string;
//     id: string; 
 }    