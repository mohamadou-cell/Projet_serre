import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { CreateParametreDto } from './dto/create-parametre.dto';
import { UpdateParametreDto } from './dto/update-parametre.dto';
import { Parametre } from './entities/parametre.entity';

@Injectable()
export class ParametreService {

  constructor(
    @InjectModel(Parametre.name)
    private parametreModel: mongoose.Model<Parametre>,
  ) {}

  async create(createParametreDto: CreateParametreDto) {
    const res = await this.parametreModel.create(createParametreDto);
    return res;
  }

  async findAll() {
    const parametres = await this.parametreModel.find();
    return parametres;
  }

  async findOne(id: string) {
    const parametre = await this.parametreModel.findById(id);

    if (!parametre) {
      throw new NotFoundException('Rien a été trouvé');
    }

    return parametre;
  }

  async update(id: string, updateParametreDto: UpdateParametreDto) {
    return await this.parametreModel.findByIdAndUpdate(id, updateParametreDto, {
      new: true,
      runValidators: true,
    });
  }

  async remove(id: string) {
    return await this.parametreModel.findByIdAndDelete(id);
  }
}
