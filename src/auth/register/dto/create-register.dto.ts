import { IsNotEmpty } from 'class-validator';

export class UserRegisterDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  phone: string;

  provider: string;

  photo: string;

  status: number;
}
