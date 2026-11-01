import {
    IsEmail,
    IsIn,
    IsInt,
    IsNotEmpty,
    IsOptional,
    IsString,
    IsStrongPassword,
    Matches,
    Max,
    Min,
    MinLength,
  } from 'class-validator';
  
  export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    fullName!: string;
  
    @IsNotEmpty()
    @IsEmail()
    email!: string;
  
    @IsString()
    @IsNotEmpty()
    @IsStrongPassword({
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
    password!: string;
  
    @IsNotEmpty()
    @IsInt()
    @Min(18)
    @Max(60)
    age!: number;
  
    @IsString()
    @IsNotEmpty()
    @Matches(/^01[0-9]{9}$/, {
      message: 'phone must contain exactly 11 digits and begin with 01',
    })
    phone!: string;
  
    @IsString()
    @IsNotEmpty()
    @IsIn(['student', 'teacher'])
    accountType!: string;
  
    @IsOptional()
    @IsString()
    @MinLength(10)
    address?: string;
  }