import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TourDto } from 'src/dto/tour-dto';
import { ITour, ITourClient } from 'src/interfaces/tour';
import { Tour, TourDocument } from 'src/schemas/tour';

@Injectable()
export class ToursService {

    private toursCount = 10;

    constructor(@InjectModel(Tour.name) private tourModel: Model<TourDocument>) {}

   async generateTours(): Promise<any>{
  for (let i = 0; i <= this.toursCount; i++) {
    const tour = new TourDto('test'+i, 'test description', 'test operator', '300'+i, 'test img');
    const tourData = new this.tourModel(tour);
    await tourData.save();
   }
  }

  async deleteTours(): Promise<any> {
           return this.tourModel.deleteMany({});
         }


   async getAllTours(): Promise<ITour[]> {
          return this.tourModel.find();
      }


  async getTourById(id): Promise<ITour|null> {
        return this.tourModel.findById(id);
    }   
    
    
    async uploadTour(body: ITourClient) {
        const tour = new TourDto(body.name, body.description, body.tourOperator, body.price, body.img);
        const tourData = new this.tourModel(tour);
        await tourData.save();
    }
     
}
