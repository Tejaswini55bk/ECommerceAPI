import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './createproduct.dto';
import { IsBoolean, IsNumber, IsOptional } from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @IsNumber()
  id: number;

  @IsOptional()
  @IsNumber()
  price: number;

  @IsOptional()
  @IsBoolean()
  available: boolean;
}
