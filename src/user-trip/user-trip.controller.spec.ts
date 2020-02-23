import { Test, TestingModule } from '@nestjs/testing';
import { UserTripController } from './user-trip.controller';

describe('UserTrip Controller', () => {
  let controller: UserTripController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserTripController],
    }).compile();

    controller = module.get<UserTripController>(UserTripController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
