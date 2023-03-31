import { Module } from '@nestjs/common';
import { ParametreService } from './parametre.service';
import { ParametreController } from './parametre.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ParametreSchema } from './entities/parametre.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Parametre', schema: ParametreSchema }])],
  controllers: [ParametreController],
  providers: [ParametreService]
})
export class ParametreModule {}
