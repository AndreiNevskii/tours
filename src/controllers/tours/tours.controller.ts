import { Controller, Delete, Post } from '@nestjs/common';
import { ToursService } from 'src/services/tours/tours.service';

@Controller('tours')
export class ToursController {
    constructor (private toursService: ToursService) {}

     @Post()
    initTours(): void {
        this.toursService.generateTours();
    }

    @Delete()
    removeAllTours(): void {
       this.toursService.deleteTours();
    }
}
