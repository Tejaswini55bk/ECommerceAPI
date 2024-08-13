import { PartialType } from '@nestjs/mapped-types';
import { CreateReviewDto } from './createreview.dto';
import { IsNumber, IsOptional } from 'class-validator';
export class UpdateReviewDto extends PartialType(CreateReviewDto) {
  @IsNumber()
  id: number;

  @IsOptional()
  ratings: number;

  @IsOptional()
  comments: string;
}
