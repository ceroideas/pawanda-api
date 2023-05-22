import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Profile from 'src/entities/profile.entity';
import Users from 'src/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Profile, Users])],
  controllers: [ProfileController],
  providers: [ProfileService],
})
export class ProfileModule {}
