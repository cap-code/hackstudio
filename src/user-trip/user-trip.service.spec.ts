import { Test, TestingModule } from '@nestjs/testing';
import { UserTripService } from './user-trip.service';

describe('UserTripService', () => {
  let service: UserTripService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserTripService],
    }).compile();

    service = module.get<UserTripService>(UserTripService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
