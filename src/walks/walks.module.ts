import { Module } from '@nestjs/common';
import { WalksService } from './walks.service';
import { WalksController } from './walks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Walks from 'src/entities/walks.entity';
import Dogs from 'src/entities/dogs.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Walks, Dogs])],
  controllers: [WalksController],
  providers: [WalksService],
})
export class WalksModule {}
