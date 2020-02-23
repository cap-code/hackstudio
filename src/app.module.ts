import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UserRequestModule } from './user-request/user-request.module';
import { UserTripModule } from './user-trip/user-trip.module';
import { BusesModule } from './buses/buses.module'
import { MongooseModule}from '@nestjs/mongoose'

@Module({
  imports: [UserModule,UserRequestModule,UserTripModule,BusesModule,MongooseModule.forRoot('mongodb+srv://hackstudio:studio@cluster0-q7yfm.mongodb.net/hackstudio?retryWrites=true&w=majority'), ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
