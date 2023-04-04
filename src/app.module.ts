import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { RegisterModule } from './auth/register/register.module';
import { LoginModule } from './auth/login/login.module';
import { SharedModule } from './shared/shared.module';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
@Module({
  imports: [
    ConfigModule,

    DatabaseModule,
    RegisterModule,
    SharedModule,
    LoginModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
