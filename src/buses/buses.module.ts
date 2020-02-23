import { Module } from '@nestjs/common';
import { BusesController } from './buses.controller';
import { BusesService } from './buses.service';
import { MongooseModule } from '@nestjs/mongoose';
import {busetripSchema } from './buses.model';
import {busesSchema} from './buses.model';

@Module({
  imports:[MongooseModule.forFeature([{name:'bustrip',schema:busetripSchema},{name:'buses',schema:busesSchema}])],
  controllers: [BusesController],
  providers: [BusesService]
})
export class BusesModule {}
