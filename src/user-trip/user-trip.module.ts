import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserTripController } from './user-trip.controller';
import { UserTripService } from './user-trip.service';
import {usertripSchema } from './user-trip.model';

@Module({
  imports: [MongooseModule.forFeature([{name:'usertrip',schema:usertripSchema}])],
  controllers: [UserTripController],
  providers: [UserTripService]
})
export class UserTripModule {}
