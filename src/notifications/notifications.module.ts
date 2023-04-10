import { Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Notifications from 'src/entities/notifications.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Notifications])],
  controllers: [NotificationsController],
  providers: [NotificationsService],
})
export class NotificationsModule {}
