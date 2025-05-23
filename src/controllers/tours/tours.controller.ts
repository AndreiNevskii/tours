import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ITour } from 'src/interfaces/tour';
import { ValidationParamIdPipe } from 'src/pipes/param-id.pipe';
import { Tour } from 'src/schemas/tour';
import { ToursService } from 'src/services/tours/tours.service';

@Controller('tours')
export class ToursController {
    constructor (private toursService: ToursService) {}

//    @Post()
//     initTours(): void {
//         this.toursService.generateTours();
//     }
   
//      @Delete()
//     removeAllTours(): void {
//        this.toursService.deleteTours();
//     }
   
 @Post()
    initTours(): Promise<ITour[]> {
        this.toursService.generateTours();
        return this.toursService.getAllTours();
    }

    @Delete()
    removeAllTours(): void {
       this.toursService.deleteTours();
    }

    //  @Get()
    //  getAllTours(): Promise<Tour[]> {
    //          return this.toursService.getAllTours();
    //     }

    // @Get(":id")
    //     getTourById(@Param('id') id): Promise<Tour> {
    //         return this.toursService.getTourById(id);
    //     }

     @Get(":id")
          getTourById(@Param('id', ValidationParamIdPipe) id): Promise<Tour|null> {
              return this.toursService.getTourById(id);
          }
 }  
   
















   
   
    //  @Get()
    //  getAllTours(): void {
    //  this.toursService.generateTours();
    // }

    // @Get(":remove")
    // removeAllTours(@Param('remove') remove): void {
    //    this.toursService.deleteTours();
    // }









    //   @Post()
    //   initTours(): void {
    //  this.toursService.generateTours();
    //   }

    // @Delete(":remove")
    // removeAllTours(@Param('remove') remove): void {
    //    this.toursService.deleteTours();
    // }

    //   @Post()
    //  initTours(): Promise<ITour[]> {
    //      this.toursService.generateTours();
    //      return this.toursService.getAllTours();
    //  }

    //  @Delete()
    //  removeAllTours(): void {
    //     this.toursService.deleteTours();
    //  }

    //  @Get()
    //  getAllTours(): Promise<Tour[]> {
    //          return this.toursService.getAllTours();
    //     }

    // @Get(":id")
    //     getTourById(@Param('id') id): Promise<Tour> {
    //         return this.toursService.getTourById(id);
    //     }

    // @Get(":id")
    //      getTourById(@Param('id', ValidationParamIdPipe) id): Promise<Tour|null> {
    //          return this.toursService.getTourById(id);
    //      }

