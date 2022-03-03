import { Module } from '@nestjs/common';
import { MentorsService } from './mentors.service';
import { MentorsController } from './mentors.controller';
import { Mentor } from './entities/mentor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([Mentor])],
  controllers: [MentorsController],
  providers: [MentorsService]
})
export class MentorsModule {}
