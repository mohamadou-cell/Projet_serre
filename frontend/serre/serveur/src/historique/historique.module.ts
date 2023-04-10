import { Module } from '@nestjs/common';
import { HistoriqueService } from './historique.service';
import { HistoriqueController } from './historique.controller';
import { historiqueSchema } from './entities/historique.entity';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MongooseModule.forFeature([{ name: 'Historique', schema: historiqueSchema }])],
  controllers: [HistoriqueController],
  providers: [HistoriqueService]
})
export class HistoriqueModule {}