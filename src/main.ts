import { NestFactory } from '@nestjs/core';
import 'reflect-metadata';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });

  // app.setGlobalPrefix('api');
  app.use(
    session({
      secret: 'secreto',
      resave: false,
      saveUninitialized: false,
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  console.log();
  app.useStaticAssets(join(__dirname, '..', 'public'));

  app.useGlobalPipes(new ValidationPipe({ forbidUnknownValues: false }));
  app.setViewEngine('hbs');
  await app.listen(3001);
}
bootstrap();
