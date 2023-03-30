import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
    @Schema({
        timestamps: true,
      })
      export class Climat {
        @Prop()
        temperature: string;
      
        @Prop()
        humid_serre: string;
      
        @Prop()
        humid_sol: string;
      
        @Prop()
        luminosite: string;
      }
      export const ClimatSchema = SchemaFactory.createForClass(Climat);
     

