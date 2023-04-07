import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class UpdateDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  readonly password: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  readonly newPassword: string;
}
