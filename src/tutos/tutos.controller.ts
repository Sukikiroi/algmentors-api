import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TutosService } from './tutos.service';
import { CreateTutoDto } from './dto/create-tuto.dto';
import { UpdateTutoDto } from './dto/update-tuto.dto';

@Controller('tutos')
export class TutosController {
  constructor(private readonly tutosService: TutosService) {}

  @Post()
  create(@Body() createTutoDto: CreateTutoDto) {
    return this.tutosService.create(createTutoDto);
  }

  @Get()
  findAll() {
    return this.tutosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tutosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTutoDto: UpdateTutoDto) {
    return this.tutosService.update(+id, updateTutoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tutosService.remove(+id);
  }
}
