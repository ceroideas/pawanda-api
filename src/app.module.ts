import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { RegisterModule } from './auth/register/register.module';
import { LoginModule } from './auth/login/login.module';
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      port: 3306,
      password: 'video',
      database: 'pawanda',
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      synchronize: true,
    }),

    RegisterModule,

    LoginModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
