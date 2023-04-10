import { Module } from '@nestjs/common';
import { RacesService } from './races.service';
import { RacesController } from './races.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Races from 'src/entities/races.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Races])],
  controllers: [RacesController],
  providers: [RacesService],
})
export class RacesModule {}
