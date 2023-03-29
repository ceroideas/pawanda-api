import { Controller, Get, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Res() res: Response) {
    res.render('login', {
      title: 'Mi página de inicio',
      layout: 'layout/main',
      message: '¡Bienvenido a mi sitio web!',
    });
  }
  @Get('admin')
  getAdemin(@Res() res: Response) {
    res.render('admin/index', {
      title: 'Admin peros',
      layout: 'layout/main',
      message: '¡Bienvenido a mi sitio web!',
    });
  }
}
