import { IsBoolean, IsNumber, IsString, IsOptional } from 'class-validator';
export class CreateProductDto {
  @IsNumber()
  @IsOptional()
  id: number;

  @IsString()
  name: string;

  @IsString()
  type: string;

  @IsNumber()
  price: number;

  @IsBoolean()
  available: boolean;

  @IsNumber()
  @IsOptional()
  proId: number;
}
