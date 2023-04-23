import { Controller, Get, Render, Res, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('login')
  getHello(@Res() res: Response) {
    res.render('login', {
      title: 'Mi página de inicio',
      layout: 'layout/main',
      message: '¡Bienvenido a mi sitio web!',
    });
  }

  // @UseGuards(JwtAuthGuard)
  @Get()
  getAdemin(@Res() res: Response) {
    res.render('admin/index', {
      title: 'Admin peros',
      layout: 'layout/main',
      message: '¡Bienvenido a mi sitio web!',
    });
  }
}
