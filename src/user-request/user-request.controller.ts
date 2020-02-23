import { Controller,Post, Body, Get } from '@nestjs/common';
import{ UserRequestService } from'./user-request.service'

@Controller('user-request')
export class userrequestController {
    constructor(private readonly userrequestservice:UserRequestService){}
    @Post()
    async adduserrequest(
        @Body('time') requesttime:string,
        @Body('start_location') requeststart:any,
        @Body('end_location') requestend:any
    ){
    
        const generateid= await this.userrequestservice.insertuserrequest(
            requesttime,
            requeststart,
            requestend,);
            return {id:generateid};
    }
    @Get()
    async getalluserrequest(){
        const userrequest =await this.userrequestservice.getuserrequest();
        return userrequest;
    }
    @Post('/update-score')
    async updateScore(@Body('request_id') request_id:string){
     const updatescore= await this.userrequestservice.updatescore(request_id);
     return updatescore;    
    }
}