import { Test, TestingModule } from '@nestjs/testing';
import { MentorsController } from './mentors.controller';
import { MentorsService } from './mentors.service';

describe('MentorsController', () => {
  let controller: MentorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MentorsController],
      providers: [MentorsService],
    }).compile();

    controller = module.get<MentorsController>(MentorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
