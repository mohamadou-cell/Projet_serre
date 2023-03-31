import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Parametre {
  @Prop()
  nombre_arrosage: string;

  @Prop()
  heure_arrosage1: string;

  @Prop()
  heure_arrosage2: string;

  @Prop()
  heure_arrosage3: string;

  @Prop()
  duree: string;
}
export const ParametreSchema = SchemaFactory.createForClass(Parametre);
