import { Module } from '@nestjs/common';
import { CardsService } from './cards.service';
import { CardsController } from './cards.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Cards from 'src/entities/cards.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cards])],
  controllers: [CardsController],
  providers: [CardsService],
})
export class CardsModule {}
