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
import { ProfileModule } from './profile/profile.module';
import { DogsModule } from './dogs/dogs.module';
import { RacesModule } from './races/races.module';
import { WalksModule } from './walks/walks.module';
import { PunctuationsModule } from './punctuations/punctuations.module';
import { NotificationsModule } from './notifications/notifications.module';
import { PaymentsModule } from './payments/payments.module';
import { CardsModule } from './cards/cards.module';
import { BankDataModule } from './bank-data/bank-data.module';
import { DisponibilitiesModule } from './disponibilities/disponibilities.module';

@Module({
  imports: [
    ConfigModule,

    DatabaseModule,
    RegisterModule,
    SharedModule,
    LoginModule,
    ProfileModule,
    DogsModule,
    RacesModule,
    WalksModule,
    PunctuationsModule,
    NotificationsModule,
    PaymentsModule,
    CardsModule,
    BankDataModule,
    DisponibilitiesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
