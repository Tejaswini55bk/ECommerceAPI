import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
export class CreateReviewDto {
  @IsNotEmpty()
  @IsOptional()
  @IsNumber()
  id: number;
  @IsNumber()
  ratings: number;
  @IsString()
  comments: string;
  @IsNumber()
  @IsOptional()
  userId: number;
}
