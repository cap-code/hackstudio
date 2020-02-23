import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { userrequestController } from './user-request.controller';
import { UserRequestService } from './user-request.service';
import {userrequestSchema } from './user-request.model';

@Module({
  imports:[MongooseModule.forFeature([{name:'userrequest',schema:userrequestSchema}])],
  controllers: [userrequestController],
  providers: [UserRequestService]
})
export class UserRequestModule {}
