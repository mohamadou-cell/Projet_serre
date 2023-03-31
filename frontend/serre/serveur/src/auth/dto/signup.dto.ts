import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class SignUpDto {
  @IsNotEmpty()
  @IsString()
  readonly prenom: string;

  @IsNotEmpty()
  @IsString()
  readonly nom: string;

  @IsNotEmpty()
  @IsString()
  readonly matricule1: string;
<<<<<<< HEAD


  @IsNotEmpty()
  @IsString()
  readonly matricule2: string;
=======
>>>>>>> 313465a9abfd52002e32770e09bd0ebeefb5ed8f

  @IsNotEmpty()
  @IsString()
  readonly matricule2: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Entrer un email correct' })
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  readonly password: string;
}