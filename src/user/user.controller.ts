import { Controller,Post, Body, Get } from '@nestjs/common';
import{ UserService } from'./user.service'

@Controller('user')
export class UserController {
    constructor(private readonly userservice:UserService){}
    @Post()
    async adduser(
        @Body('name') user_name:string,
        @Body('email') user_email:string,
        @Body('phone') user_phone:string
    ){
    
        const generateid= await this.userservice.insertuser(
            user_name,
            user_email,
            user_phone,);
            return {id:generateid};
    }
    @Get()
    async getalluser(){
        const user =await this.userservice.getuser();
        return user;
    }
}