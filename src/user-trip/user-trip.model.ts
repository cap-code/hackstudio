import * as mongoose from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
export const usertripSchema=new mongoose.Schema({
    userid:{type:String,required:true},
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
export interface  usertrip extends mongoose.Document{
    
         userid:string;
         starting_location:any;
         ending_location:any;
    
}