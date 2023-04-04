import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionOptions } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { ConfigModule } from 'src/config/config.module';
import Users from 'src/entities/user.entity';
import Walks from 'src/entities/walks.entity';
import Rooms from 'src/entities/rooms.entity';
import Races from 'src/entities/races.entity';
import Puntuations from 'src/entities/puntuations.entity';
import Profile from 'src/entities/profile.entity';
import Bank_datas from 'src/entities/bank_datas.entity';
import Cards from 'src/entities/cards.entity';
import Disponibilities from 'src/entities/disponibilities.entity';
import Dogs from 'src/entities/dogs.entity';
import Messages from 'src/entities/messages.entity';
import Notifications from 'src/entities/notifications.entity';
import Payments from 'src/entities/payments.entity';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) =>
        ({
          type: 'mysql',
          host: 'localhost',
          username: 'root',
          port: 3306,
          password: '',
          database: 'pawanda',
          entities: [
            Users,
            Walks,
            Rooms,
            Races,
            Puntuations,
            Profile,
            Payments,
            Notifications,
            Messages,
            Dogs,
            Disponibilities,
            Cards,
            Bank_datas,
          ],
          synchronize: false,
          logging: ['query', 'error', 'schema'],
          migrationsTableName: 'migrations',
          migrations: [__dirname + '/../migrations/*{.ts,.js}'],
          cli: {
            migrationsDir: 'src/migrations',
          },
        } as ConnectionOptions),
    }),
  ],
})
export class DatabaseModule {}
