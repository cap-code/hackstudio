import { Test, TestingModule } from '@nestjs/testing';
import { BusesController } from './buses.controller';

describe('Buses Controller', () => {
  let controller: BusesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BusesController],
    }).compile();

    controller = module.get<BusesController>(BusesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
