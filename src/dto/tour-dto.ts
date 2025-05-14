import { ITour } from "src/interfaces/tour";


export class TourDto implements ITour {
     name:string;
    description:string;
    tourOperator:string;
    price:string;
    img:string;
    id:string;
    type: string;
    date: string;

    constructor(name, description, tourOperatoe, price) {
         this.name = name; 
         this.description = description;
         this.tourOperator = tourOperatoe;
         this.price = price;
    }

}