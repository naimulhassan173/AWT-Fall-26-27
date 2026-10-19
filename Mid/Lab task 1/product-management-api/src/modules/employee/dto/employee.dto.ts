import { IsEmail, IsInt, IsNotEmpty, IsString, Min } from "class-validator";
import { PartialType } from "@nestjs/swagger";

export class CreateEmployeeDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsEmail()
  email!: string;

  @IsString()
  @IsNotEmpty()
  phone!: string;

  @IsString()
  @IsNotEmpty()
  password!: string;

  @IsInt()
  @Min(0)
  age!: number;

  @IsInt()
  @Min(0)
  yearsOfWorking!: number;
}

export class UpdateEmployeeDto extends PartialType(CreateEmployeeDto) {}
