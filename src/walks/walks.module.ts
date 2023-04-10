import { Module } from '@nestjs/common';
import { WalksService } from './walks.service';
import { WalksController } from './walks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Walks from 'src/entities/walks.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Walks])],
  controllers: [WalksController],
  providers: [WalksService],
})
export class WalksModule {}
