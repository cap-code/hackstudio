import * as mongoose from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
export const userrequestSchema=new mongoose.Schema({
  score:{type:Number, default:1},  
  time:{type:String,required:true},
  start_location: {
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
  end_location: {
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
export interface  userrequest extends mongoose.Document{
    id:string;
    score:number;
    time:string;
    start_location:any;
    end_location:any;
}