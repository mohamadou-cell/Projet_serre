import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type ClimatDocument = HydratedDocument<Climat>;
    @Schema()
      export class Climat {
        @Prop()
        temperature: string;
      
        @Prop()
        humid_serre: string;
      
        @Prop()
        humid_sol: string;
      
        @Prop()
        luminosite: string;

        @Prop()
        date: string;
      }
      export const ClimatSchema = SchemaFactory.createForClass(Climat);
     

