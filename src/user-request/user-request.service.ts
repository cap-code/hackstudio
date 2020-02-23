import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import { userrequest } from './user-request.model'
import {Model} from 'mongoose'

@Injectable()
export class UserRequestService {
    private userrequest:userrequest[]=[];
    constructor(@InjectModel('userrequest') private readonly userrequestmodel:Model){}
    async insertuserrequest(time:string,startl:any,endl:any){
        
        
      const new_userrequest=new this.userrequestmodel({time:time,start_location:startl,end_location:endl});
      const result= await new_userrequest.save();
      return result.id as string;
    }
     async getuserrequest() {
         const userrequest= await this.userrequestmodel.find().exec();
        return userrequest;
      }
    async updatescore(request_id){
        const updatescore=await this.userrequestmodel.findOne({_id:request_id});
        updatescore.score = updatescore.score +1;
        await updatescore.save();
        return updatescore; 
    }
}
