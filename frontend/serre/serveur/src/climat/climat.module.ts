/* import { Module } from '@nestjs/common';
import { ClimatService } from './climat.service';
import { ClimatController } from './climat.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ClimatSchema } from './entities/climat.entity';
import { ClimatGateway } from './climat.gateway';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Climat', schema: ClimatSchema }])],
  controllers: [ClimatController],
  providers: [ClimatService, ClimatGateway]
})
export class ClimatModule {} */
import { Module } from "@nestjs/common";
import { ClimatGateway } from './climat.gateway'; //a mettre apres API
import { MongooseModule } from "@nestjs/mongoose";
import { Climat, ClimatSchema } from "./entities/climat.entity";
import { ClimatService } from "./climat.service";
import { ClimatController } from "./climat.controller";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Climat.name, schema: ClimatSchema }]),
  ], //a mettre apres API decommenter
  providers: [ ClimatGateway, ClimatService],
  controllers: [ClimatController],
  exports: [ClimatService],
})
export class ClimatModule {}
