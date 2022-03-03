import { Test, TestingModule } from '@nestjs/testing';
import { TutosService } from './tutos.service';

describe('TutosService', () => {
  let service: TutosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TutosService],
    }).compile();

    service = module.get<TutosService>(TutosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
