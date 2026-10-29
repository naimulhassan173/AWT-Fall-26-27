import {
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateResearchOpportunityDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(150)
  title!: string;

  @IsNotEmpty()
  @IsString()
  description!: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(250)
  requiredSkills!: string;
}