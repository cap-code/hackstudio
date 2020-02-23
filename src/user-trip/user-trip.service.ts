import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import { usertrip } from './user-trip.model'
import {Model} from 'mongoose'
@Injectable()
export class UserTripService {
    
        private usertrip:usertrip[]=[];
        constructor(@InjectModel('usertrip') private readonly usertripmodel:Model){}
        async insertusertrip(userid:string,ustart:any,uend:any){
            
            
          const new_prod=new this.usertripmodel({userid:userid,starting_location:ustart,ending_location:uend});
          const result= await new_prod.save();
          return result.id as string;
        }
         async getusertrip() {
             const products= await this.usertripmodel.find().exec();
            return products;
          }
       
        }
    

