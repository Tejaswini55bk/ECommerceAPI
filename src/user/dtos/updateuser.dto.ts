import { PartialType } from '@nestjs/mapped-types';
import { userDto } from './createuser.dto';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Exclude } from 'class-transformer';
export class UpdateUserDto extends PartialType(userDto) {
  @IsNumber()
  @IsOptional()
  id: number;

  @IsString()
  name?: string;

  @IsString()
  email?: string;

  @IsOptional()
  @Exclude()
  password!: string;
}
