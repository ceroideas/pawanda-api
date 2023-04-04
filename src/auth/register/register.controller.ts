import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserRegisterDto } from './dto/create-register.dto';
import { RegisterService } from './register.service';

@Controller('/api/auth')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post('/register')
  findAll(@Body() user: UserRegisterDto) {
    return this.registerService.registerUser(user);
  }
}
