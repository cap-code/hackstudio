import { Test, TestingModule } from '@nestjs/testing';
import { UserRequestController } from './user-request.controller';

describe('UserRequest Controller', () => {
  let controller: UserRequestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserRequestController],
    }).compile();

    controller = module.get<UserRequestController>(UserRequestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
