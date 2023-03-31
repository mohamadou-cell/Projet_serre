import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParametreService } from './parametre.service';
import { CreateParametreDto } from './dto/create-parametre.dto';
import { UpdateParametreDto } from './dto/update-parametre.dto';

@Controller('parametre')
export class ParametreController {
  constructor(private readonly parametreService: ParametreService) {}

  @Post()
  create(@Body() createParametreDto: CreateParametreDto) {
    return this.parametreService.create(createParametreDto);
  }

  @Get()
  findAll() {
    return this.parametreService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parametreService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateParametreDto: UpdateParametreDto) {
    return this.parametreService.update(id, updateParametreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.parametreService.remove(id);
  }
}
