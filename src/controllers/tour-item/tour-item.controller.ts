import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ToursService } from 'src/services/tours/tours.service';
import { diskStorage } from 'multer';
import { ITourClient } from 'src/interfaces/tour';


@Controller('tour-item')
export class TourItemController {
constructor(private toursServise: ToursService){}
static imgName: string;

@Post()
@UseInterceptors(FileInterceptor('img', {
    storage: diskStorage({
        destination: './public/',
        filename: (req, file, cb) => {
            const imgType = file.mimetype.split('/');
            const iniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
            const imgName = file.fieldname + '-' + iniqueSuffix + '.' + imgType[1];

            cb (null, imgName);
            TourItemController.imgName = imgName;
        }
    }) 
})
)

initTours(@Body() body: ITourClient): void {
   body.img = TourItemController.imgName;
   this.toursServise.uploadTour(body);
}

}
