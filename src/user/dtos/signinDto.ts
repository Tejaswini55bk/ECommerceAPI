import { IsNumber, IsOptional, IsString } from 'class-validator';
export class signinDto {
  @IsOptional()
  @IsNumber()
  id: number;

  @IsString()
  email: string;

  @IsString()
  password: string;
}
