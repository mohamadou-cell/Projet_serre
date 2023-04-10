import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { CreateHistoriqueDto } from './dto/create-historique.dto';
import { UpdateHistoriqueDto } from './dto/update-historique.dto';
import { Historique } from './entities/historique.entity';

@Injectable()
export class HistoriqueService {

  constructor(
    @InjectModel(Historique.name)
    private historiqueModel: mongoose.Model<Historique>,
  ) {}

  async create(createHistoriqueDto: CreateHistoriqueDto) {
    const res = await this.historiqueModel.create(createHistoriqueDto);
    return res;

  }
 
  async findAll() {
   // return `This action returns all historique`;
   const historique = await this.historiqueModel.find();
  return historique;
  }

  findOne(id: number) {
    return `This action returns a #${id} historique`;
  }

  update(id: number, updateHistoriqueDto: UpdateHistoriqueDto) {
    return `This action updates a #${id} historique`;
  }

  remove(id: number) {
    return `This action removes a #${id} historique`;
  }
}
