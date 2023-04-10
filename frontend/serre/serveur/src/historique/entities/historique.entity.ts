import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

    
@Schema()
export class Historique {
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
export const historiqueSchema = SchemaFactory.createForClass(Historique);


