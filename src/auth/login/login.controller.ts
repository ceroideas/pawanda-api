import {
  Controller,
  Post,
  Body,
  Res,
  HttpException,
  HttpStatus,
  UseGuards,
  Get,
  Req,
} from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginDto } from './dto/create-login.dto';
import { AuthGuard } from '@nestjs/passport';
import { GoogleAuthGuard } from '../guards/google-auth.guard';
import { FacebookAuthGuard } from '../guards/facebook-auth.guard';

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

  @Get('google')
  @UseGuards(GoogleAuthGuard)
  async googleLogin() {
    // El controlador redirige al usuario a la página de autenticación de Googlee
  }

  @UseGuards(GoogleAuthGuard)
  @Get('google/callback')
  async googleCallback(@Req() req, @Res() res) {
    const data = await this.loginService.socialLogin(req);
    if (data?.statusCode || data instanceof HttpException)
      return res.status(HttpStatus.BAD_REQUEST).send(data);

    return res.json(data);
  }

  @Get('/facebook')
  @UseGuards(FacebookAuthGuard)
  async facebookLogin(): Promise<any> {
    return HttpStatus.OK;
  }

  @Get('/facebook/redirect')
  @UseGuards(FacebookAuthGuard)
  async facebookLoginRedirect(@Req() req, @Res() res) {
    const data = await this.loginService.socialLogin(req);
    if (data?.statusCode || data instanceof HttpException)
      return res.status(HttpStatus.BAD_REQUEST).send(data);

    return res.json(data);
  }
}
