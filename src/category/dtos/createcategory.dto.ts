import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsString()
  name: string;
}
