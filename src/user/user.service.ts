import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import { User } from './user.model'
import {Model} from 'mongoose'
@Injectable()
export class UserService {
    private user:User[]=[];
    constructor(@InjectModel('user') private readonly usermodel:Model){}
    async insertuser(name:string,email:string,phone:string){
        
        
      const new_user=new this.usermodel({name:name,email:email,phone:phone});
      const result= await new_user.save();
      return result.id as string;
    }
     async getuser() {
         const user= await this.usermodel.find().exec();
        return user.map(user_n =>({
            id:user_n.id,
            name:user_n.name,
            email:user_n.email,
            phone:user_n.phone,
        }));
      }
    
}