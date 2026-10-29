import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateSupervisorDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(120)
  name!: string;

  @IsNotEmpty()
  @IsEmail()
  @MaxLength(190)
  email!: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(150)
  researchArea!: string;
}