import * as mongoose from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
export const busetripSchema=new mongoose.Schema({
    start_time:{type:String,required:true},
    ending_time:{type:String,required:true},
    starting_location: {
        type: {
          type: String, 
          enum: ['Point'], 
          required: true
        },
        coordinates: {
          type: [Number],
          required: true
        }
      },
      ending_location: {
        type: {
          type: String, 
          enum: ['Point'], 
          required: true
        },
        coordinates: {
          type: [Number],
          required: true
        }
    }
});   
export interface  bustrip extends mongoose.Document{
    
         start_time:string;
         end_time:string;
         starting_location:any;
         ending_location:any;
    
}
export const busesSchema=new mongoose.Schema({
    buseid:{type:String,required:true},
    name:{type:String,required:true},
    reg_id:{type:String,required:true}

});   
export interface  buses extends mongoose.Document{
    
         busid:string;
         name:string;
         reg_id:string;
}