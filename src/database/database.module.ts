import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionOptions } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { ConfigModule } from 'src/config/config.module';
import Users from 'src/entities/user.entity';

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
          entities: [Users],
          synchronize: true,
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
