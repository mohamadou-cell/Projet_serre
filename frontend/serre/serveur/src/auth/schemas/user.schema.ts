import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class User extends Document {
  @Prop()
  prenom: string;

  @Prop()
  nom: string;

  @Prop()
  matricule: string;

  @Prop({ unique: [true, 'Email existe déjà'] })
  email: string;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);