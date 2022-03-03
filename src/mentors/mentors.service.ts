import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMentorDto } from './dto/create-mentor.dto';
import { UpdateMentorDto } from './dto/update-mentor.dto';
import { Mentor } from './entities/mentor.entity';


@Injectable()
export class MentorsService {
  constructor(
    @InjectRepository(Mentor)
    private readonly mentorRepository: Repository<Mentor>,
  ) {}


  create(createMentorDto: CreateMentorDto) {
    return 'This action adds a new mentor';
  }

  async findAll(): Promise<Mentor[]> {
    return this.mentorRepository.find();
  }

  findOne(id): Promise<Mentor> {
    return this.mentorRepository.findOne(id);
  }

  update(id: number, updateMentorDto: UpdateMentorDto) {
    return `This action updates a #${id} mentor`;
  }



  async remove(id): Promise<void> {
    await this.mentorRepository.delete(id);
  }
}
