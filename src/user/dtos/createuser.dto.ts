import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class userDto {

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  gender: string;
}

export class Assession {
  @IsString()
  session: string;

  @IsNumber()
  userId: number;
}
