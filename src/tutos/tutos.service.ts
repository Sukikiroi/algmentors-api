import { Injectable } from '@nestjs/common';
import { CreateTutoDto } from './dto/create-tuto.dto';
import { UpdateTutoDto } from './dto/update-tuto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Tuto } from './entities/tuto.entity';

@Injectable()
export class TutosService {

  constructor(
    @InjectRepository(Tuto)
    private readonly tutoRepository: Repository<Tuto>,
  ) {}


  create(createTutoDto: CreateTutoDto) {
    return 'This action adds a new tuto';
  }


  async findAll(): Promise<Tuto[]> {
    return this.tutoRepository.find({relations:["students"]});
  }

  findOne(id): Promise<Tuto> {
    return this.tutoRepository.findOne(id,{relations:["students"]});
  }

  update(id: number, updateTutoDto: UpdateTutoDto) {
    return `This action updates a #${id} tuto`;
  }

  remove(id: number) {
    return `This action removes a #${id} tuto`;
  }
}
