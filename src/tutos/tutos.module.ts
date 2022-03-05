import { Module } from '@nestjs/common';
import { TutosService } from './tutos.service';
import { TutosController } from './tutos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tuto } from './entities/tuto.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Tuto])], 
  controllers: [TutosController],
  providers: [TutosService]
})
export class TutosModule {}
