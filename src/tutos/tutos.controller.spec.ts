import { Test, TestingModule } from '@nestjs/testing';
import { TutosController } from './tutos.controller';
import { TutosService } from './tutos.service';

describe('TutosController', () => {
  let controller: TutosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TutosController],
      providers: [TutosService],
    }).compile();

    controller = module.get<TutosController>(TutosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
