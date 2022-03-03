import { Module } from '@nestjs/common';
import { TutosService } from './tutos.service';
import { TutosController } from './tutos.controller';

@Module({
  controllers: [TutosController],
  providers: [TutosService]
})
export class TutosModule {}
