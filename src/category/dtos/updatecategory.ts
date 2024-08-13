import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './createcategory.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
  @IsNumber()
  id: number;

  @IsString()
  name: string;
}
