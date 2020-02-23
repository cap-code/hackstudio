import { Controller,Post,Get,Body } from '@nestjs/common';
import{ UserTripService } from'./user-trip.service'

@Controller('user-trip')
export class UserTripController {
    constructor(private readonly usertripservice:UserTripService){}
    @Post()
    async addusertrip(
        @Body('userid') utuserid:string,
        @Body('starting_location') utstart:any,
        @Body('ending_location') utend:any
    ){
    
        const generateid= await this.usertripservice.insertusertrip(
            utuserid,
            utstart,
            utend,);
            return {id:generateid};
    }
    @Get()
    async getallusertrip(){
        const usertrip =await this.usertripservice.getusertrip();
        return usertrip;
}
}
