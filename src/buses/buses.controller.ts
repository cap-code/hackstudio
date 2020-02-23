import { Controller,Post,Get,Body } from '@nestjs/common';
import{ BusesService } from'./buses.service'

@Controller('buses')
export class BusesController {
    constructor(private readonly buseservice:BusesService){}
    @Post('create-bus')
    async addbus(
        @Body('busid') busid:string,
        @Body('name') busname:string,
        @Body('reg_id') busreg:string
    ){
    
        const generateid= await this.buseservice.insertbus(
            busid,
            busname,
            busreg,);
            return {id:generateid};
    }
    @Get('getall-buses')
    async getallbus(){
        const bus =await this.buseservice.getbus();
        return bus;
    }
    @Post('create-bustrip')
    async addbustrip(
        @Body('start_time') startt:string,
        @Body('end_time') endt:string,
        @Body ('starting_location') startl:any,
        @Body ('ending_location') endl:any
    ){const generatetripid= await this.buseservice.insertbustrip(
        startt,
        endt,
        startl,
        endl);
        return {id:generatetripid};
    }
    @Get('getall-busestrip')
    async getallbustrip(){
        const bustrip =await this.buseservice.getbustrip();
        return bustrip;
    }
      
    }

