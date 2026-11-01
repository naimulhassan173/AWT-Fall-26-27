import {
  IsNotEmpty,
  IsString,
  IsEmail,
  MaxLength,
} from 'class-validator';

export class CreateStudentDto {
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
  researchInterest!: string;
}