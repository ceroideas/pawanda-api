import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Notifications from 'src/entities/notifications.entity';
import { Repository } from 'typeorm';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';

@Injectable()
export class NotificationsService {
  constructor(
    @InjectRepository(Notifications)
    private notificationRepository: Repository<Notifications>,
  ) {}
  async create(notification: CreateNotificationDto) {
    const newNotification = this.notificationRepository.save(notification);

    return newNotification;
  }

  findAll(req) {
    const notifications = this.notificationRepository.find();

    return notifications;
  }

  findOne(id: number) {
    const notification = this.notificationRepository.findOneBy({ id });

    return notification;
  }

  async remove(id: number) {
    await this.notificationRepository.delete(id);
    throw new HttpException('The notification was eliminated', HttpStatus.OK);
  }
}
