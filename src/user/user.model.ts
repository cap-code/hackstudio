import * as mongoose from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
export const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:String,required:true},
});   
export interface  User extends mongoose.Document{
    
         id:string;
         name:string;
         email:string;
         phone:string;
    
}