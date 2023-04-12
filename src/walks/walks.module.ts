import { Module } from '@nestjs/common';
import { WalksService } from './walks.service';
import { WalksController } from './walks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Walks from 'src/entities/walks.entity';
import Dogs from 'src/entities/dogs.entity';
import Histories from 'src/entities/histories.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Walks, Dogs, Histories])],
  controllers: [WalksController],
  providers: [WalksService],
})
export class WalksModule {}
