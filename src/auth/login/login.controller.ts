import {
  Controller,
  Post,
  Body,
  Res,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginDto } from './dto/create-login.dto';

@Controller('/api/auth')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('/login')
  async create(@Body() login: LoginDto, @Res() res) {
    const data = await this.loginService.login(login);
    if (data?.statusCode || data instanceof HttpException)
      return res.status(HttpStatus.BAD_REQUEST).send(data);

    return res.json(data);
  }
}
