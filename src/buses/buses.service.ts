import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { bustrip } from './buses.model'
import { buses } from './buses.model'
import { Model } from 'mongoose'

@Injectable()
export class BusesService {
  private busesservice: BusesService[] = [];
  constructor(@InjectModel('bustrip') private readonly busetripmodel: Model,
    @InjectModel('buses') private readonly busesmodel: Model) { }
  async insertbustrip(startt: string, endt: string, startl: any, endl: any) {
    const new_prod = new this.busetripmodel({ start_time: startt, ending_time: endt, starting_location: startl, ending_location: endl });
    const result = await new_prod.save();
    return result.id as string;
  }
  async getbustrip() {
    const bus = await this.busetripmodel.find().exec();
    return bus;
  }
  async  insertbus(busid: string, name: string, regid: string) {
    const new_prod = new this.busesmodel({ buseid: busid, name: name, reg_id: regid });
    const result = await new_prod.save();
    return result.id as string;
  }
  async getbus() {
    const bus = await this.busesmodel.find();
    return bus;
  }
}


