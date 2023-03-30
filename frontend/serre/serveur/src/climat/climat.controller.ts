import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClimatService } from './climat.service';
import { CreateClimatDto } from './dto/create-climat.dto';
import { UpdateClimatDto } from './dto/update-climat.dto';

@Controller('climat')
export class ClimatController {
  constructor(private readonly climatService: ClimatService) {}

  @Post()
  create(@Body() createClimatDto: CreateClimatDto) {
    return this.climatService.create(createClimatDto);
  }

  @Get()
  findAll() {
    return this.climatService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.climatService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClimatDto: UpdateClimatDto) {
    return this.climatService.update(id, updateClimatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.climatService.remove(id);
  }
}
